"use client";
import boldnessIcon from "@/presentation/assets/icons/boldness.png";
import communityIcon from "@/presentation/assets/icons/community.png";
import creativityIcon from "@/presentation/assets/icons/creativity.png";
import growthIcon from "@/presentation/assets/icons/growth.png";
import responsibilityIcon from "@/presentation/assets/icons/responsibility.png";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";
import ArticleCard from "@/presentation/components/ArticleCard";
import CoverButton from "@/presentation/components/CoverButton";
import InputText from "@/presentation/components/InputText";
import ProjectCard from "@/presentation/components/ProjectCard";
import Value from "@/presentation/components/Value";
import Article from "@/presentation/layouts/Article";
import ContactForm from "@/presentation/layouts/ContactForm";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import Header from "@/presentation/layouts/Header";
import ProjectCTA from "@/presentation/layouts/ProjectCTA";
import ProjectsTable from "@/presentation/layouts/ProjectsTable";

export default function Home() {
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

  const articlesList = [
    {
      image: ImagePreview,
      imageAlt: "Article about Sass",
      date: "09/2023",
      title: "Injecting Sass @use via webpack",
      description:
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
      articleId: "sass-prepend-via-webpack",
    },
    {
      image: ImagePreviewTwo,
      imageAlt: "Article about NextJS architecture",
      date: "10/2023",
      title: "Constructing NextJS monorepo",
      description:
        "Today, we are constructing our new application with a monorepo, with the intention of keeping scaling and building a TurboRepo in next projects, connecting all the mainframes, utilities and libraries developed by Coding Flavour",
      articleId: "nextjs-monorepo-from-scratch",
    },
  ];
  const sendEmail = async () => {
    //TODO
    // await fetch('https://codingflavoursmtp.onrender.com', {
    //   method: "POST",
    //   body: JSON.parse()
    // })
  };
  // TODO: This will be a global interface available for several components
  const projects = [
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
  ];
  const article = {
    articleId: "sass-prepend-via-webpack",
    image: ImagePreviewTwo,
    imageAlt: "Article about Sass",
    date: "09/2023",
    title: "Injecting Sass @use via webpack",
    paragraphs: [
      `${Array.from(Array(10)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
      `${Array.from(Array(3)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
      `${Array.from(Array(6)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
    ],
    author: "Daniel Sánchez",
  };
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "black",
          marginTop: 70,
        }}
      >
        <ProjectsTable projects={projects} />

        <Article article={article} sendEmail={sendEmail} />

        <ContactUsCTA />

        <ProjectCTA />

        <ContactForm />

        {values.map((value) => (
          <Value value={value} key={value} />
        ))}

        {articlesList.map((article) => (
          <ArticleCard
            image={article.image}
            imageAlt={article.imageAlt}
            date={article.date}
            title={article.title}
            description={article.description}
            articleId={article.articleId}
            key={article.articleId}
          />
        ))}

        <InputText id="name" value="Full name" type="text" />
        <InputText id="email" value="E-mail" type="text" isError />
        <InputText id="email" value="E-mail" type="text" isSuccess />

        <CoverButton />
        {projects.map((project) => (
          <ProjectCard
            projectId={project.projectId}
            key={project.projectId}
            projectName={project.projectName}
            date={project.date}
            platform={project.platform}
          />
        ))}
      </main>
    </>
  );
}
