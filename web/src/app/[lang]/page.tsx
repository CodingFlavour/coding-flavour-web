import boldnessIcon from "@public/icons/boldness.png";
import communityIcon from "@public/icons/community.png";
import creativityIcon from "@public/icons/creativity.png";
import growthIcon from "@public/icons/growth.png";
import responsibilityIcon from "@public/icons/responsibility.png";
import { getDictionary } from "@src/data/locales/dict/dict";
import ArticleList from "@src/presentation/layouts/ArticleList";
import HeroPage from "@src/presentation/layouts/HeroPage/HeroPage";
import ProjectCTA from "@src/presentation/layouts/ProjectCTA";
import ProjectsTable from "@src/presentation/layouts/ProjectsTable";
import {
  findArticlesPreview,
  transformDictToArticleCard,
} from "@src/services/FindArticle";
import {
  findProjectsPreview,
  transformDictToProject,
} from "@src/services/FindProject";
import ImagePreview from "@public/images/image-preview.jpg";
import Image from "next/image";
import styles from "@src/presentation/styles/pages/_home.module.scss";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";

const { home, home__image } = styles;

// TODO: To do
const Home = async ({ params: { lang } }: { params: { lang: any } }) => {
  const fullDict = await getDictionary(lang);
  const projectsDict = await findProjectsPreview(fullDict);

  const projects = projectsDict.map((dic) => transformDictToProject(dic));
  const values = [
    {
      id: "Growth",
      title: "Growth",
      description:
        "Commitment to continuous learning, development, and advancement for both our team and our solutions.",
      image: growthIcon,
    },
    {
      id: "Creativity",
      title: "Creativity",
      description:
        "We thrive on thinking beyond the conventional, embracing fresh perspectives and imaginative solutions.",
      image: creativityIcon,
    },
    {
      id: "Boldness",
      title: "Boldness",
      description:
        "Drives us to pioneer innovative solutions and overcome challenges with unwavering determination.",
      image: boldnessIcon,
    },
    {
      id: "Responsibility",
      title: "Responsibility",
      description:
        "We understand the impact of our work on the world. We prioritize well-being of individuals and environment.",
      image: responsibilityIcon,
    },
    {
      id: "Community",
      title: "Community",
      description:
        "Fostered through collaboration, knowledge-sharing, and mutual support, creating an ecosystem to drive collective growth.",
      image: communityIcon,
    },
  ];

  const common = await fullDict.common;
  const articlesDict = await findArticlesPreview(fullDict);
  const articleList = articlesDict.map((articleDict) =>
    transformDictToArticleCard(articleDict)
  );

  return (
    <>
      <main
        className={`${home} main`}
        style={{
          color: "white",
        }}
      >
        <HeroPage dict={common} />
        <ProjectsTable projects={projects} dict={common} />
        <Image src={ImagePreview} alt="" className={home__image} />
        <ArticleList articles={articleList} dict={common} seeMoreButton />
        <ContactUsCTA dict={common} />
      </main>
    </>
  );
};

export default Home;
