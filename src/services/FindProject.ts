import { IImage, IProject, ITechStack } from "@src/data/Models/Project";
import { Dict, DictData, projects } from "@src/data/locales/dict/dict";

const FindProject = {
  findProjectsPreview: async (dict: Dict) => {
    const allProjectsDict = Object.keys(dict).filter((dictName) =>
      projects.names.find((project) => project === dictName)
    );
    
    const allProjectsPromises = allProjectsDict.map(
      (projectId) => dict[projectId]
    );
    const allProjects = await Promise.all(allProjectsPromises);
    return allProjects;
  },
  findProjectInDict: async (id: string, dict: Dict) => {
    const parseId = id.replaceAll("-", "");

    const projectIndex = Object.keys(dict).find(
      (dictName) => dictName === parseId
    );
    if (projectIndex) {
      const project = await dict[projectIndex];
      return project;
    }
  },
  transformDictToProject: (dict: DictData) => {
    const dictImages = dict.images as string[];
    const dictImagesAlt = dict.imagesAlt as string[];

    const dictTechStackIcons = dict.techStackImages as string[];
    const dictTechStackIconsAlt = dict.techStackImagesAlt as string[];

    const images: IImage[] = dictImages.map((image, index) => ({
      image,
      alt: dictImagesAlt[index],
    }));

    const techStack: ITechStack[] = dictTechStackIcons.map((icon, index) => ({
      icon,
      alt: dictTechStackIconsAlt[index],
    }));

    const project: IProject = {
      date: dict.date as string,
      images,
      paragraphs: dict.paragraphs as string[],
      platform: dict.platform as string,
      projectId: dict.projectId as string,
      projectName: dict.projectName as string,
      techStack,
      url: dict.url as string,
    };

    return project;
  },
};

export const {
  findProjectsPreview,
  findProjectInDict,
  transformDictToProject,
} = FindProject;
