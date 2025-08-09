import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import ProjectInformation from "@src/presentation/layouts/ProjectInformation";
import ProjectList from "@src/presentation/layouts/ProjectList";
import styles from "@src/presentation/styles/pages/_project-id.module.scss";
import {
  findProjectsPreview,
  transformDictToProject,
} from "@src/services/FindProject";
import { notFound } from "next/navigation";

interface IProjectIdSlug {
  id: string;
}

const { projectId } = styles;

const ProjectId: Page<IProjectIdSlug> = async ({ params }) => {
  const { lang, id } = await params;
  const fullDict = await getDictionary(lang);
  const projectsDict = await findProjectsPreview(fullDict);

  const projects = projectsDict.map((dic) => transformDictToProject(dic));
  const project = projects.find((project) => project.projectId === id);
  const common = fullDict.common;

  if (!project) return notFound();

  return (
    <main className={`main ${projectId}`} data-testid={"project-id"}>
      <ProjectInformation
        date={project.date}
        url={project.url}
        images={project.images}
        paragraphs={project.paragraphs}
        platform={project.platform}
        projectName={project.projectName}
        techStack={project.techStack}
        projectId={project.projectId}
        visitText={common.deployedWebsite as string}
      />
      <ProjectList
        projects={projects}
        dict={common}
        title={common.otherProjects as string}
      />
      <ContactUsCTA dict={common} />
    </main>
  );
};

export default ProjectId;
