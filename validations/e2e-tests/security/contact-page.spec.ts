import { expect, test } from '@playwright/test';
import { navigateToWebsite, navigateWithNavbar } from "../lib/common-actions";

const contactFormErrorMessage = "There was an error sending your message. Please, try again later.";
const contactFormSuccessMessage = "Thank you for contacting us! Your message has been sent successfully. We will get in touch with you as soon as possible.";

// Como usuario, quiero que el servidor me bloquee el envio de mensajes si envio mas de 5 mensajes en un periodo de tiempo corto para evitar spam
test('blocks contact form after multiple submissions', async ({ page }) => {
  await navigateToWebsite(page);
  await navigateWithNavbar(page, 'contact', 'en/contact');

  const form = page.getByTestId('contact-form')
  await expect(form).toBeVisible();

  const nameInput = form.locator('#name');
  const emailInput = form.locator('#email');
  const messageInput = form.locator('#message');
  const submitButton = form.locator('button[type="submit"]');

  await nameInput.fill('Test User');
  await emailInput.fill('testuser@email.com');
  await messageInput.fill('This is a test message.');

  for (let i = 0; i < 6; i++) {
    // Overlay on top, force click to bypass it and test the security mechanism
    await submitButton.click({ force: true });
    await expect(page.getByTestId('contact-form-finished-message')).toBeVisible();

    // Actualmente no hacemos redireccion ni hacemos nada concreto para diferenciar un mensaje OK, de uno KO, de uno de seguridad, asi que no tenemos otra que mirar que mensaje esta saliendo en el formulario. Lo ideal seria que el formulario cuando rompa por seguridad, te llevara a otra pagina, o que mostrara un mensaje concreto en otro elemento que nos permitiera testearlo de forma mas fiable.
    const message = await page.getByTestId('contact-form-finished-message').innerText();

    const expectedMessage = i < 5 ? contactFormSuccessMessage : contactFormErrorMessage;

    expect(message).toBe(expectedMessage);
  }
});