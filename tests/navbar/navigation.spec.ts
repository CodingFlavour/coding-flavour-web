import { test, expect } from '@playwright/test';
import { navigateToLanguage, navigateToWebsite, navigateWithNavbar } from 'tests/lib/common-actions';

// Como usuario, quiero poder navegar al inicio de la web para ver el contenido principal
test('navigates to home page', async ({ page }) => {
  await navigateToWebsite(page);

  await expect(page).toHaveTitle(/Coding Flavour/);

  const logo = page.getByTestId('logo');
  await expect(logo).toBeVisible();

  await logo.click();
  await expect(page).toHaveURL('http://localhost:3000/en');
});

// Como usuario, quiero poder navegar a la sección de acerca de para conocer mas sobre los fundadores
test('navigates to about page', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateWithNavbar(page, 'navbar-list-item-about', 'en/about');
});

// Como usuario, quiero poder navegar a la sección de proyectos para ver los proyectos destacados
test('navigates to projects page', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateWithNavbar(page, 'navbar-list-item-projects', 'en/projects');
});

// Como usuario, quiero poder navegar a la sección de articulos para leer contenido interesante
test('navigates to articles page', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateWithNavbar(page, 'navbar-list-item-articles', 'en/articles');
});

// Como usuario, quiero poder navegar a la sección de contacto para enviar un mensaje
test('navigates to contact page', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateWithNavbar(page, 'navbar-list-item-contact', 'en/contact');
});

test('navigates to spanish version of the site', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateToLanguage(page, 'es');

  await navigateWithNavbar(page, 'navbar-list-item-about', 'es/about');
});

test('navigates to english version of the site', async ({ page }) => {
  await navigateToWebsite(page);

  await navigateToLanguage(page, 'en');

  await navigateWithNavbar(page, 'navbar-list-item-about', 'en/about');
});

