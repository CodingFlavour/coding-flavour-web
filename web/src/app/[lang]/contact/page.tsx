import ContactForm from "@/presentation/layouts/ContactForm";
import styles from "@/presentation/styles/pages/_contact.module.scss";
import { getDictionary } from "@/data/locales/dict/dict";

const { contact } = styles;

const Contact = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang) // en
  return (
    <main className={`main ${contact}`} data-testid={'contact'}>
      <ContactForm />
    </main>
  );
};

export default Contact;
