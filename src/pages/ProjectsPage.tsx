import Layout from "@/components/Layout";
import AnimatedPage from "@/components/AnimatedPage";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="pt-8">
          <Projects />
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default ProjectsPage;
