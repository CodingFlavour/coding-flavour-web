import ImagePreview from "@public/images/image-preview.jpg";
import { getDictionary } from "@src/data/locales/dict/dict";
import ArticleList from "@src/presentation/layouts/ArticleList";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import HeroPage from "@src/presentation/layouts/HeroPage/HeroPage";
import ProjectsTable from "@src/presentation/layouts/ProjectsTable";
import styles from "@src/presentation/styles/pages/_home.module.scss";
import {
  findArticlesPreview,
  transformDictToArticleCard,
} from "@src/services/FindArticle";
import {
  findProjectsPreview,
  transformDictToProject,
} from "@src/services/FindProject";
import Image from "next/image";

const { home, home__image } = styles;

const Home = async ({ params: { lang } }: { params: { lang: any } }) => {
  const fullDict = await getDictionary(lang);

  const common = await fullDict.common;
  
  const articlesDict = await findArticlesPreview(fullDict);
  const articleList = articlesDict.map((articleDict) =>
    transformDictToArticleCard(articleDict)
  );

  const projectsDict = await findProjectsPreview(fullDict);
  const projects = projectsDict.map((dic) => transformDictToProject(dic));

  return (
    <>
      <main className={`${home} main`} data-testid={"home"}>
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
