"use client";
import boldnessIcon from "@/presentation/assets/icons/boldness.png";
import communityIcon from "@/presentation/assets/icons/community.png";
import creativityIcon from "@/presentation/assets/icons/creativity.png";
import growthIcon from "@/presentation/assets/icons/growth.png";
import responsibilityIcon from "@/presentation/assets/icons/responsibility.png";
import Article from "@/presentation/layouts/Article";
import ContactForm from "@/presentation/layouts/ContactForm";
import ProjectCTA from "@/presentation/layouts/ProjectCTA";
import ProjectsTable from "@/presentation/layouts/ProjectsTable";
import {
  // DEFAULT_ARTICLE_MOCK,
  DEFAULT_PROJECT_MOCK,
} from "@/validations/utils/mocks";

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

  return (
    <>
      <main className="main">
        <section>
          <ProjectsTable projects={[DEFAULT_PROJECT_MOCK]} />
        </section>

        <section>
          {/* <Article article={DEFAULT_ARTICLE_MOCK} sendEmail={sendEmail} /> */}
        </section>

        <ProjectCTA />

        <ContactForm />
      </main>
    </>
  );
}
