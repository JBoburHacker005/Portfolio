import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Terminal, FileCode2, Code2, Server, Atom, Box, 
  Database, Cloud, Laptop, Monitor, Container,
  Braces, Cpu, Globe, Rocket, Shield, PenTool
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Python / Django / Fast API", icon: Terminal, level: "95%" },
        { name: "Node.js / Express", icon: Box, level: "90%" },
        { name: "Java / Spring Boot", icon: Code2, level: "85%" },
        { name: "PHP / Laravel", icon: Server, level: "80%" },
      ]
    },
    {
      title: "Frontend Development",
      icon: Laptop,
      skills: [
        { name: "React / Next.js", icon: Atom, level: "95%" },
        { name: "TypeScript", icon: Braces, level: "90%" },
        { name: "Tailwind CSS", icon: PenTool, level: "98%" },
        { name: "Vue.js", icon: Globe, level: "75%" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cpu,
      skills: [
        { name: "Docker / Kubernetes", icon: Container, level: "85%" },
        { name: "Linux / Bash", icon: Terminal, level: "90%" },
        { name: "Git / CI/CD", icon: Rocket, level: "95%" },
        { name: "PostgreSQL / MongoDB", icon: Database, level: "92%" },
      ]
    }
  ];

  return (
    <section ref={ref} id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase border border-primary/20 mb-4"
          >
            Mahoratlar
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6">
            Mening <span className="gradient-text glow-text-primary italic">Arsenalim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hozirgi kunda men foydalanayotgan va professional darajada o'zlashtirgan texnologiyalar to'plami.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: catIndex * 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">{category.title}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-background/50 border border-white/5 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                        {skill.level}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                    
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: skill.level } : {}}
                        transition={{ duration: 1.5, delay: 1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

