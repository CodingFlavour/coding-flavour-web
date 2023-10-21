"use client";

import ContactForm from "@/presentation/layouts/ContactForm";
import styles from "@/presentation/styles/pages/_contact.module.scss";

const { contact } = styles;

const Contact = () => {
  return (
    <main className={`main ${contact}`} data-testid={'contact'}>
      <ContactForm />
    </main>
  );
};

export default Contact;
