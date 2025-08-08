import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import ProjectList from "@src/presentation/layouts/ProjectList";
import styles from "@src/presentation/styles/pages/_projects.module.scss";
import {
  findProjectsPreview,
  transformDictToProject,
} from "@src/services/FindProject";
import { i18n } from "../../../../i18n.config";

const { mainProjects } = styles;

const Projects: Page = async ({ params }) => {
  const dict = await getDictionary(params?.lang ?? i18n.defaultLocale);
  const projectsDict = await findProjectsPreview(dict);

  const common = await dict.common;
  const projects = projectsDict.map((dic) => transformDictToProject(dic));

  const title = common.projects as string;
  return (
    <main className={`main ${mainProjects}`} data-testid={"projects"}>
      <ProjectList projects={projects} title={title} dict={common} />
      <ContactUsCTA dict={common} />
    </main>
  );
};

export default Projects;
