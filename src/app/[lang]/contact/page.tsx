import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import ContactForm from "@src/presentation/layouts/ContactForm";
import styles from "@src/presentation/styles/pages/_contact.module.scss";

const { contact } = styles;

const Contact: Page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  const common = await dict.common;

  return (
    <main className={`main ${contact}`} data-testid={"contact"}>
      <ContactForm dict={common} />
    </main>
  );
};

export default Contact;
