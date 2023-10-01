import { IProject } from "@/data/Project";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import ProjectList from "@/presentation/layouts/ProjectList";
import styles from "@/presentation/styles/pages/_projects.module.scss";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";

const { projects__contactUsCTA, projects__projectList } = styles;

const Projects = () => {
  // TODO Parse projects from JSON
  return (
    <main className="main" data-testid={"projects"}>
      <section
        className={projects__projectList}
        data-testid={"projects-project-list"}
      >
        <ProjectList projects={[DEFAULT_PROJECT_MOCK]} title="Projects" />
      </section>
      <section
        className={projects__contactUsCTA}
        data-testid={"projects-contact-us-cta"}
      >
        <ContactUsCTA />
      </section>
    </main>
  );
};

export default Projects;
