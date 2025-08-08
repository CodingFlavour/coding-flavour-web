import { expect, Page } from "@playwright/test";

const BASE_URL = 'http://localhost:3000';

const withBase = (segment: string) => `${BASE_URL}/${segment}`;

const navigateToWebsite = async (page: Page) => {
    await page.goto(withBase(''));
}

const navigateWithNavbar = async (page: Page, linkTestId: string, expectedUrl: string) => {
    const link = page.getByTestId(linkTestId);

    await expect(link).toBeVisible();

    await link.click();

    await commonNavigation(page, withBase(expectedUrl));
}

const navigateToLanguage = async (page: Page, language: string) => {
    const languageSelector = page.getByTestId(`language-selector-${language}`);
    await expect(languageSelector).toBeVisible();

    await languageSelector.click();
    await commonNavigation(page, withBase(language));
}

const navigate = async (page: Page, locator: string, expectedUrl: string) => {
    await page.locator(locator).click();

    await commonNavigation(page, withBase(expectedUrl));
}

const commonNavigation = async (page: Page, expectedUrl: string) => {
    const isThere = await areWeThereYet(page, expectedUrl);

    if (!isThere) {
        throw new Error(`Navigation to ${expectedUrl} failed after multiple attempts.`);
    }

    await expect(page).toHaveURL(expectedUrl);
}

const areWeThereYet = async (page: Page, expectedUrl: string, tries: number = 0) => {
    const currentUrl = page.url();

    if (currentUrl === expectedUrl) {
        return true;
    }

    if (tries >= 5) {
        return false;
    }

    await page.waitForTimeout(1000);
    return areWeThereYet(page, expectedUrl, tries + 1);
}



export { navigate, navigateToWebsite, navigateWithNavbar, navigateToLanguage };