import { test, expect } from '@playwright/test';
import { navigateToWebsite } from 'tests/lib/common-actions';

const LOCATORS = {
  heroPage: 'hero-page',
  header: 'hero-page-header',
  subheader: 'hero-page-subheader',
  presentation: 'hero-page-presentation',
  scrollGif: 'hero-page-presentation-scroll',
  rotateText: 'rotate-text',
  information: 'hero-page-information',
  infoParagraphOne: 'hero-page-information-paragraph-one',
  infoParagraphTwo: 'hero-page-information-paragraph-two',
  infoParagraphThree: 'hero-page-information-paragraph-three',
  infoImage: 'hero-page-information-image'
}

// Como usuario, quiero ver la página principal con el hero para entender qué es Coding Flavour
test('hero page displays correctly', async ({ page }) => {
  await navigateToWebsite(page);

  const heroPage = page.getByTestId(LOCATORS.heroPage);
  await expect(heroPage).toBeVisible();
});

// Como usuario, quiero ver el título principal de Coding Flavour
test('hero page shows main title', async ({ page }) => {
  await navigateToWebsite(page);

  const header = page.getByTestId(LOCATORS.header);
  await expect(header).toBeVisible();
  await expect(header).toHaveText('Coding Flavour');
});

// Como usuario, quiero ver el subtítulo descriptivo del equipo
test('hero page shows creative team subtitle', async ({ page }) => {
  await navigateToWebsite(page);

  const subheader = page.getByTestId(LOCATORS.subheader);
  await expect(subheader).toBeVisible();
  await expect(subheader).toHaveText('Creative team');
});

// Como usuario, quiero ver la sección de presentación del hero
test('hero page presentation section is visible', async ({ page }) => {
  await navigateToWebsite(page);

  const presentation = page.getByTestId(LOCATORS.presentation);
  await expect(presentation).toBeVisible();
});

// Como usuario, quiero ver el gif de scroll para saber que puedo hacer scroll
test('hero page shows scroll gif', async ({ page }) => {
  await navigateToWebsite(page);

  const scrollGif = page.getByTestId(LOCATORS.scrollGif);
  await expect(scrollGif).toBeVisible();
});

// Como usuario, quiero que el texto principal rote
// taa dificil, todo el texto esta presente siempre, no hay un texto que cambie
test.skip('hero page shows rotate text component', async ({ page }) => {
  await navigateToWebsite(page);

  const dynamicText = page.getByTestId(LOCATORS.rotateText);
  await expect(dynamicText).toBeVisible();

  const initialText = await dynamicText.textContent();

  await page.waitForTimeout(8000);

  const newText = await dynamicText.textContent();
  expect(initialText).toMatch(/we make development/i);
  expect(initialText).not.toBe(newText);
});

// Como usuario, quiero ver la información adicional del hero page
test('hero page information section is present', async ({ page }) => {
  await navigateToWebsite(page);

  const heroInfo = page.getByTestId(LOCATORS.information);
  const informationParagraphOne = page.getByTestId(LOCATORS.infoParagraphOne);
  const informationParagraphTwo = page.getByTestId(LOCATORS.infoParagraphTwo);
  const informationParagraphThree = page.getByTestId(LOCATORS.infoParagraphThree);
  const informationImage = page.getByTestId(LOCATORS.infoImage);

  const oneText = await informationParagraphOne.textContent();
  const twoText = await informationParagraphTwo.textContent();
  const threeText = await informationParagraphThree.textContent();

  await expect(heroInfo).toBeVisible();
  await expect(informationParagraphOne).toBeVisible();
  expect(oneText).toMatch(/We don't just create software/i);
  await expect(informationParagraphTwo).toBeVisible();
  expect(twoText).toMatch(/Striving to challenge/i);
  await expect(informationParagraphThree).toBeVisible();
  expect(threeText).toMatch(/Your vision is our map/i);
  await expect(informationImage).toBeVisible();
});