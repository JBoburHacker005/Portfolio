import Layout from "@/components/Layout";
import AnimatedPage from "@/components/AnimatedPage";
import Certificates from "@/components/Certificates";

const CertificatesPage = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="pt-8 mb-24">
          <Certificates />
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default CertificatesPage;
