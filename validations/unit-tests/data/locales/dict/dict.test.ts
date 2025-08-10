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