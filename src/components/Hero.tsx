import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Instagram, Layout, Database, Smartphone, Code } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/JBoburHacker005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/Bobur005", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/j.bobur005", label: "Instagram" },
    { icon: Mail, href: "mailto:jbobur005@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.img
                src="/My Picture.png"
                alt="JBN creative monogram"
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary/50 shadow-[0_0_40px_rgba(var(--glow-primary),0.5)] z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              />
              <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                <p className="text-xl md:text-2xl font-semibold tracking-wide text-primary mb-2">
                  Hello, I'm Bobur 👋
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight">
                  <span className="text-white">Software</span> <br className="hidden md:block" />
                  <span className="gradient-text glow-text-primary">
                    Engineer
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16 md:h-20 max-w-2xl mx-auto">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "Building Scalable Applications",
                2000,
                "Python & React Ecosystems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            I focus on building secure, scalable backends and highly interactive frontends. My core stack involves React, Node.js, Python, and PostgreSQL. I care about clean architecture, performance, and pragmatic security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center gap-8 md:gap-16 mb-12 text-xs md:text-sm uppercase tracking-wider font-semibold text-muted-foreground glass py-6 px-10 rounded-2xl mx-auto max-w-3xl border border-primary/20"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-extrabold text-primary mb-2 glow-text-primary">3+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px bg-primary/30 h-16"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-extrabold text-primary mb-2 glow-text-primary">25+</span>
              <span>Projects Done</span>
            </div>
            <div className="w-px bg-primary/30 h-16"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-extrabold text-primary mb-2 glow-text-primary">100%</span>
              <span>Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
            </a>
            <a href="tel:+998930054287">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 group"
              >
                <social.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I provide a wide range of digital services to help your business grow and stand out in the competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layout,
                title: "Frontend Development",
                desc: "Building beautiful, responsive, and highly interactive user interfaces using React, Vue, and modern CSS frameworks like Tailwind.",
              },
              {
                icon: Database,
                title: "Backend Development",
                desc: "Creating robust APIs and server-side architecture using Node.js, Python/Django, and reliable SQL/NoSQL databases.",
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Ensuring that every application looks stunning and works perfectly across all devices, from mobile phones to large desktop screens.",
              },
              {
                icon: Code,
                title: "Clean Code",
                desc: "Writing maintainable, scalable, and fully documented code following industry best practices and design patterns.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
