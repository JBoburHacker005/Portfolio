import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Code2, Database, Layout, Server, Monitor, Terminal, FileCode2, Package, Globe, Container, TerminalSquare, Laptop } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    { name: "Python", icon: Terminal },
    { name: "JavaScript", icon: FileCode2 },
    { name: "Java", icon: Code2 },
    { name: "PHP", icon: Server },
    { name: "React", icon: Layout },
    { name: "Node.js", icon: Package },
    { name: "Database", icon: Database },
    { name: "Cloud", icon: Globe },
    { name: "macOS", icon: Laptop },
    { name: "Linux", icon: TerminalSquare },
    { name: "Windows", icon: Monitor },
    { name: "Docker", icon: Container },
  ];

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2">Men haqimda</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                <span className="text-primary">Jovliyev Bobur</span><br />
                <span className="text-primary">Nuriddin o'g'li</span>
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Salom, mening ismim Bobur Jovliyev Nuriddin o'g'li. Men 2010-yil 7-iyun kuni O'zbekiston Respublikasi Qashqadaryo viloyati Qamashi tumani Uzun qishlog'ida harbiy xizmatchi oilasida tug'ilganman. Men matematika, ingliz tili, fizika va informatika fanlariga qiziqaman hamda muntazam ravishda turli veb-saytlar yarataman. Men IBM tomonidan sertifikatlangan dasturchiman va 3 yildan ortiq ish tajribasiga egaman.
            </p>

            <ul className="space-y-4">
              {["Zamonaviy Texnologiyalar", "Kreativ Yechimlar", "Sifatli Kod"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-lg font-semibold"
                >
                  <div className="p-1 rounded-full bg-primary/20 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Texnologiyalarim</h3>
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-2xl border border-primary/10 hover:border-primary/40 transition-colors"
                >
                  <tech.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
