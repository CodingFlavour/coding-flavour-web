import { test, expect } from '@playwright/test';
import { navigate, navigateToWebsite } from 'validations/e2e-tests/lib/common-actions';

// Como usuario, quiero ver la tabla de proyectos en la página principal
test('projects table displays correctly', async ({ page }) => {
    await navigateToWebsite(page);

    const projectsTable = page.getByTestId('projects-table');
    await expect(projectsTable).toBeVisible();
});

// Como usuario, quiero ver el título de la sección de proyectos
test('projects table shows header', async ({ page }) => {
    await navigateToWebsite(page);

    const header = page.getByTestId('projects-table-header');
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Our Projects');
});

// Como usuario, quiero ver el wrapper que contiene todos los proyectos
test('projects table wrapper is visible', async ({ page }) => {
    await navigateToWebsite(page);

    const wrapper = page.getByTestId('projects-table-wrapper');
    await expect(wrapper).toBeVisible();
});

// Como usuario, quiero ver al menos un proyecto en la lista
test('projects table shows at least one project', async ({ page }) => {
    await navigateToWebsite(page);

    const firstProjectCounter = page.getByTestId('projects-table-0-counter');
    const firstProjectName = page.getByTestId('projects-table-0-name');
    const firstProjectLink = page.getByTestId('projects-table-0-link');

    await expect(firstProjectCounter).toBeVisible();
    await expect(firstProjectName).toBeVisible();
    await expect(firstProjectLink).toBeVisible();

    await expect(firstProjectCounter).toHaveText('001');
    await expect(firstProjectName).toHaveText(/Coding Flavour/i); // Our website is always the first project
    await expect(firstProjectLink).toHaveAttribute('href', 'https://codingflavour.com');
});

// Como usuario, quiero poder hacer click en los enlaces de los proyectos
test('project links are clickable and have target blank', async ({ page }) => {
    await navigateToWebsite(page);

    const firstProjectLink = page.getByTestId('projects-table-0-link');
    await expect(firstProjectLink).toBeVisible();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        firstProjectLink.click(),
    ]);

    await expect(newPage).toHaveURL('https://www.codingflavour.com/en');
    await newPage.close();
});

// Como usuario, quiero ver información adicional en desktop (platform y date)
test('projects show platform and date on desktop', async ({ page }) => {
    await navigateToWebsite(page);

    const firstProjectPlatform = page.getByTestId('projects-table-0-platform');
    const firstProjectDate = page.getByTestId('projects-table-0-date');

    // Estos elementos pueden no ser visibles en mobile, pero deben existir
    await expect(firstProjectPlatform).toBeAttached();
    await expect(firstProjectDate).toBeAttached();
});

// Como usuario, quiero ver múltiples proyectos si están disponibles
test('projects table shows multiple projects when available', async ({ page }) => {
    await navigateToWebsite(page);

    const firstProject = page.getByTestId('projects-table-0-counter');
    await expect(firstProject).toBeVisible();

    const secondProject = page.getByTestId('projects-table-1-counter');
    const secondProjectExists = await secondProject.count() > 0;

    if (secondProjectExists) {
        await expect(secondProject).toBeVisible();
        await expect(secondProject).toHaveText('002');

        const secondProjectName = page.getByTestId('projects-table-1-name');
        const secondProjectLink = page.getByTestId('projects-table-1-link');

        await expect(secondProjectName).toBeVisible();
        await expect(secondProjectLink).toBeVisible();
    }
});

// Como usuario, quiero ver el botón "Ver más" para navegar a la página de proyectos
test('projects table shows see more button', async ({ page }) => {
    await navigateToWebsite(page);

    const projectsTable = page.getByTestId('projects-table');
    await expect(projectsTable).toBeVisible();

    const seeMoreLink = projectsTable.getByTestId('visit-link');
    await expect(seeMoreLink).toBeVisible();

    const linkText = await seeMoreLink.textContent();
    expect(linkText).toMatch(/see more/i);

    await navigate(page, '[data-testid="projects-table"] [data-testid="visit-link"]', 'en/projects')
});

// Como usuario, quiero que los contadores tengan formato de 3 dígitos con ceros
test('project counters have correct format', async ({ page }) => {
    await navigateToWebsite(page);

    const counters = page.locator('[data-testid*="projects-table-"][data-testid*="-counter"]');
    const counterCount = await counters.count();

    for (let i = 0; i < Math.min(counterCount, 3); i++) {
        const counter = counters.nth(i);
        const counterText = await counter.textContent();

        expect(counterText).toMatch(/^\d{3}$/);
        expect(counterText).toBe((i + 1).toString().padStart(3, '0'));
    }
});