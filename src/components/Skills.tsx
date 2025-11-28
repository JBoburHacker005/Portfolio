import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
    { name: "Tailwind CSS", level: 92, color: "from-sky-500 to-cyan-500" },
    { name: "Next.js", level: 87, color: "from-purple-500 to-pink-500" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
