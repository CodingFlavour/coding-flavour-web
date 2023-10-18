import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";

// TODO: To do
const About: Page = async ({ params }) => {
  const dict = await getDictionary(params.lang);
  const common = await dict.common;

  return (
    <main
      className="main"
      style={{
        color: "white",
      }}
    >
      {common.articles}
    </main>
  );
};

export default About;
