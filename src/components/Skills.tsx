import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Terminal, FileCode2, Code2, Server, Atom, Box, 
  Database, Cloud, Laptop, Monitor, Container 
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const techStack = [
    { name: "Python", icon: Terminal },
    { name: "JavaScript", icon: FileCode2 },
    { name: "Java", icon: Code2 },
    { name: "PHP", icon: Server },
    { name: "React", icon: Atom },
    { name: "Node.js", icon: Box },
    { name: "Database", icon: Database },
    { name: "Cloud", icon: Cloud },
    { name: "macOS", icon: Laptop },
    { name: "Linux", icon: Terminal },
    { name: "Windows", icon: Monitor },
    { name: "Docker", icon: Container }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-300 group border border-primary/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-gradient-to-br from-black/50 to-background/50"
            >
              <div className="p-4 rounded-xl bg-primary/5 group-hover:bg-cyan-500/10 transition-colors">
                <tech.icon className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
