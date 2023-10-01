import { IProject } from "@/data/Project";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import ProjectList from "@/presentation/layouts/ProjectList";
import styles from "@/presentation/styles/pages/_projects.module.scss";

const { projects__contactUsCTA, projects__projectList } = styles;

const Projects = () => {
  const projects: IProject[] = [
    {
      projectId: "tell-us",
      projectName: "Tell Us",
      date: "07/2023",
      platform: "Web",
      url: "https://tell-us.com",
    },
    {
      projectId: "portfolios",
      projectName: "Portfolio",
      date: "08/2023",
      platform: "Desktop",
      url: "https://coding-flavour/portfolios",
    },
    {
      projectId: "coding-flavour",
      projectName: "Coding Flavour",
      date: "09/2023",
      platform: "Server",
      url: "https://coding-flavour.com",
    },
    {
      projectId: "another-project",
      projectName: "Another project",
      date: "10/2023",
      platform: "Web",
      url: "https://another-project.com",
    },
  ];
  return (
    <main className="main" data-testid={"projects"}>
      <section
        className={projects__projectList}
        data-testid={"projects-project-list"}
      >
        <ProjectList projects={projects} />
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
