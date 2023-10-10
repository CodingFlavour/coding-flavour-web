import ContactForm from "@src/presentation/layouts/ContactForm";
import styles from "@src/presentation/styles/pages/_contact.module.scss";
import { getDictionary } from "@src/data/locales/dict/dict";
import Page from "@src/data/Models/Page";

const { contact } = styles;

const Contact: Page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang) // en
  return (
    <main className={`main ${contact}`} data-testid={'contact'}>
      <ContactForm />
    </main>
  );
};

export default Contact;
