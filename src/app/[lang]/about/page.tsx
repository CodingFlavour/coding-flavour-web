import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import AboutInfoValues from "@src/presentation/layouts/About/AboutInfoValues";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import ProjectCTA from "@src/presentation/layouts/ProjectCTA";
import styles from "@src/presentation/styles/pages/_about.module.scss";

const { about } = styles;

const About: Page = async ({ params }) => {
  const dict = await getDictionary(params.lang);
  const common = await dict.common;

  return (
    <main className={`${about} main`}>
      <AboutInfoValues dict={common} />
      <ProjectCTA dict={common} />
      <ContactUsCTA dict={common} />
    </main>
  );
};

export default About;
