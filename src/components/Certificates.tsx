import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Badge } from "lucide-react";

export const certificates = [
  { title: "Back-end sertifikati", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Back-end%20sertifikati.pdf" },
  { title: "Data Science Math Skills", platform: "Coursera", link: "https://jbobur.vercel.app/Sertifikat/Data%20Science%20Math%20Skills%20sertifikati.pdf" },
  { title: "Development Microsoft Servers", platform: "Microsoft", link: "https://jbobur.vercel.app/Sertifikat/Development%20Microsoft%20Servers%20sertifikati.pdf" },
  { title: "Django SQL Development", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Django%20SQL%20Development%20sertifikati.pdf" },
  { title: "Elektron tijorat", platform: "E-commerce", link: "https://jbobur.vercel.app/Sertifikat/Elektron%20tijorat.pdf" },
  { title: "Full-stack sertifikati", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Full-stacke%20sertifikati.pdf" },
  { title: "Full-stack sertifikati (2)", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Full-stacke%20sertifikati%20%282%29.pdf" },
  { title: "Front-end sertifikati", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Front-end%20sertifikati.pdf" },
  { title: "Generative AI Elevate", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Generative%20AI%20Elevate%20your%20Software%20Development%20sertifikati.pdf" },
  { title: "Git va GitHub", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Git%20va%20GitHub%20sertifikati.pdf" },
  { title: "HTML, CSS va JavaScript", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/HTML,%20CSS%20va%20JavaScript%20sertifikati.pdf" },
  { title: "Introduction to Cloud Computing", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Introduction%20to%20Cloud%20Computing%20sertifikati.pdf" },
  { title: "Containers w Docker, Kubernetes", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Introduction%20to%20Containers%20w%20Docker,%20Kubernetes%20sertifikati.pdf" },
  { title: "Introduction to Generative AI", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Introduction%20to%20Generative%20AI%20sertifikati.pdf" },
  { title: "Introduction to Software Engineering", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Introduction%20to%20Software%20Engineering%20sertifikati.pdf" },
  { title: "Introduction to User Experience", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Introduction%20to%20User%20Experience%20Design%20sertifikati.pdf" },
  { title: "Software Developer Guide", platform: "IBM", link: "https://jbobur.vercel.app/Sertifikat/Software%20Developer%20Career%20Guide%20and%20Interview%20sertifikati.pdf" },
  { title: "WEB Dezayn", platform: "Web Design", link: "https://jbobur.vercel.app/Sertifikat/WEB%20Dezayn.pdf" },
  { title: "SMM", platform: "Social Media Marketing", link: "https://jbobur.vercel.app/Sertifikat/SMM.pdf" },
  { title: "Ingliz tili", platform: "English Language", link: "https://jbobur.vercel.app/Sertifikat/Ingliz%20tili.pdf" },
  { title: "JavaScript (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/javascript_basic%20certificate.pdf" },
  { title: "CSS (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/css%20certificate.pdf" },
  { title: "Python (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/python_basic%20certificate.pdf" },
  { title: "Software Engineer Intern", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/software_engineer_intern%20certificate.pdf" },
  { title: "Java (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/java_basic%20certificate.pdf" },
  { title: "R (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/r_basic%20certificate.pdf" },
  { title: "Problem Solving (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/problem_solving_basic%20certificate.pdf" },
  { title: "SQL (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/sql_basic%20certificate.pdf" },
  { title: "React (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/react_basic%20certificate.pdf" },
  { title: "C# (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/c_sharp_basic%20certificate.pdf" },
  { title: "Software Engineer", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/software_engineer%20certificate.pdf" },
  { title: "Go (Basic)", platform: "HackerRank", link: "https://jbobur.vercel.app/Hackerrank/golang_basic%20certificate.pdf" }
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="certificates" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Sertifikatlarim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'qib o'rgangan bilimlarimni tasdiqlaydigan hujjatlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center justify-between group border border-primary/10 hover:border-primary/50 transition-all shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {cert.platform.includes("IBM") ? (
                  <Badge className="w-8 h-8 text-white" />
                ) : cert.platform.includes("HackerRank") ? (
                  <Award className="w-8 h-8 text-white" />
                ) : (
                  <Award className="w-8 h-8 text-white" />
                )}
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{cert.platform}</p>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all hover:scale-105"
              >
                Ko'rish
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
