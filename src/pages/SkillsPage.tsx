import Layout from "@/components/Layout";
import AnimatedPage from "@/components/AnimatedPage";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";

const SkillsPage = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="pt-8">
          <Skills />
          <Certificates />
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default SkillsPage;
