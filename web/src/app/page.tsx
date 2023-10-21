"use client";
import boldnessIcon from "@/presentation/assets/icons/boldness.png";
import communityIcon from "@/presentation/assets/icons/community.png";
import creativityIcon from "@/presentation/assets/icons/creativity.png";
import growthIcon from "@/presentation/assets/icons/growth.png";
import IconJS from "@/presentation/assets/icons/icon-js.svg";
import IconReact from "@/presentation/assets/icons/icon-react.svg";
import IconRedux from "@/presentation/assets/icons/icon-redux.svg";
import IconSass from "@/presentation/assets/icons/icon-sass.svg";
import responsibilityIcon from "@/presentation/assets/icons/responsibility.png";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";
import ImagePreviewThree from "@/presentation/assets/images/image-preview-3.jpg";
import ImagePreviewFour from "@/presentation/assets/images/image-preview-4.png";
import ImagePreviewFive from "@/presentation/assets/images/image-preview-5.png";
import ImagePreviewSix from "@/presentation/assets/images/image-preview-6.png";
import ImagePreviewSeven from "@/presentation/assets/images/image-preview-7.png";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";
import Copyright from "@/presentation/components/Copyright/Copyright";
import LanguageSelector from "@/presentation/components/LanguageSelector";
import Value from "@/presentation/components/Value";
import Article from "@/presentation/layouts/Article";
import ArticleList from "@/presentation/layouts/ArticleList";
import ContactForm from "@/presentation/layouts/ContactForm";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import Header from "@/presentation/layouts/Header";
import ProjectCTA from "@/presentation/layouts/ProjectCTA";
import ProjectInformation from "@/presentation/layouts/ProjectInformation";
import ProjectList from "@/presentation/layouts/ProjectList";
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

  const sendEmail = async () => {
    //TODO
    // await fetch('https://codingflavoursmtp.onrender.com', {
    //   method: "POST",
    //   body: JSON.parse()
    // })
  };
  // TODO: This will be a global interface available for several components

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
      `${Array.from(Array(6)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
    ],
    author: "Daniel Sánchez",
  };
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
  const techStack = [
    {
      icon: IconReact,
      alt: "React",
    },
    {
      icon: IconRedux,
      alt: "Redux",
    },
    {
      icon: IconJS,
      alt: "JavaScript",
    },
    {
      icon: IconSass,
      alt: "Sass",
    },
  ];
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
        {values.map((value) => (
          <Value value={value}></Value>
        ))}

        <Copyright></Copyright>

        <LanguageSelector
          isLeftActive={true}
          handleNewLanguage={() => {}}
        />

        <ContactForm />

        <ArticleList />

        <ProjectList />

        <ProjectInformation
          projectName={projects[0].projectName}
          date={projects[0].date}
          platform={projects[0].platform}
          images={[
            {
              image: ImagePreview,
              alt: "Image",
            },
            {
              image: ImagePreviewThree,
              alt: "Image",
            },
            {
              image: ImagePreviewFive,
              alt: "Image",
            },
            {
              image: ImagePreviewSeven,
              alt: "Image",
            },
          ]}
          paragraphs={article.paragraphs}
          techStack={techStack}
          deployedUrl={projects[0].url}
        />
        <ProjectInformation
          projectName={projects[1].projectName}
          date={projects[1].date}
          platform={projects[1].platform}
          images={[
            {
              image: ImagePreviewTwo,
              alt: "Image",
            },
            {
              image: ImagePreviewFour,
              alt: "Image",
            },
            {
              image: ImagePreviewSix,
              alt: "Image",
            },
            {
              image: ImagePreviewSeven,
              alt: "Image",
            },
          ]}
          paragraphs={article.paragraphs}
          techStack={techStack}
          deployedUrl={projects[1].url}
        />
      </main>
    </>
  );
}
