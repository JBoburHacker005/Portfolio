import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#contact", label: "Email" },
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
                src="/brand-logo.png"
                alt="JBN creative monogram"
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
                initial={{ rotate: -5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              />
              <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                <p className="text-xl md:text-2xl font-semibold tracking-wide text-primary">
                  Jovliyev Bobur Nuriddin O&apos;g&apos;li
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading">
                  <span className="gradient-text glow-text-primary">
                    Creative Developer
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Building Digital Experiences",
                2000,
                "Crafting Modern Interfaces",
                2000,
                "Designing with Purpose",
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Passionate about creating beautiful, functional, and user-centered digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
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
  );
};

export default Hero;
