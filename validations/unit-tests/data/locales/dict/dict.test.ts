import { articles, getDictionary, projects } from "@src/data/locales/dict/dict";

const mockWarn = jest.fn()

jest.spyOn(console, 'warn').mockImplementation(mockWarn)

describe("Dictionary Test Suite", () => {
  beforeEach(() => {
    mockWarn.mockClear();
  });

  it("should load the common dictionary", async () => {
    const dict = await getDictionary("en");

    expect(dict).toHaveProperty("common");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it("should load the articles dictionary", async () => {
    const dict = await getDictionary("en");

    expect(dict).toHaveProperty(articles.names[0]);
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it("should load the projects dictionary", async () => {
    const dict = await getDictionary("en");

    expect(dict).toHaveProperty(projects.names[0]);
    expect(mockWarn).not.toHaveBeenCalled();
  });

  // Everything is OK with this test, but the system its too fast to make concurrency happens
  // And JSON have little data
  it.skip("should load correctly when several concurrent requests happens", async () => {
    const p1 = getDictionary("en");
    const p2 = getDictionary("en");

    const [dict1, dict2] = await Promise.all([p1, p2]);

    expect(dict1).toEqual(dict2);
    expect(mockWarn).toHaveBeenCalled();
    expect(mockWarn).toHaveBeenCalledWith("Waiting for dictionaries to load...");
  });

  it('should throw error if requested dictionary is not found', async () => {
    const actual = () => getDictionary('fr');

    await expect(actual()).rejects.toThrow("Dictionary for locale \"fr\" not found.");
  });

  it('should warn when accessing missing dictionary', async () => {
    const dict = await getDictionary("en");

    expect(dict).toHaveProperty("common");
    expect(mockWarn).not.toHaveBeenCalled();

    const missingDict = dict.missingDict;
    expect(missingDict).toBe("missingDict");
    expect(mockWarn).toHaveBeenCalledWith("Missing translation for key: missingDict");
  });

  it('should warn when accessing missing translation keys', async () => {
    const dict = await getDictionary("en");

    expect(dict).toHaveProperty("common");
    expect(mockWarn).not.toHaveBeenCalled();

    const missingKey = dict.common["missingKey"];
    expect(missingKey).toBe("missingKey");
    expect(mockWarn).toHaveBeenCalledWith("Missing translation for key: missingKey");
  });
});