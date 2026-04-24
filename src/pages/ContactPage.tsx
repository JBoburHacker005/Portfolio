import Layout from "@/components/Layout";
import AnimatedPage from "@/components/AnimatedPage";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="pt-8">
          <Contact />
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default ContactPage;
