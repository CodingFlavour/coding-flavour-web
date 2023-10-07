import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import ProjectList from "@/presentation/layouts/ProjectList";
import styles from "@/presentation/styles/pages/_projects.module.scss";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";

const { projects } = styles;

const Projects = () => {
  // TODO Parse projects from JSON
  return (
    <main className={`main ${projects}`} data-testid={"projects"}>
      <ProjectList projects={[DEFAULT_PROJECT_MOCK]} title="Projects" />
      <ContactUsCTA />
    </main>
  );
};

export default Projects;
