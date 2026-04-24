import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Laptop, Smartphone, Gamepad2, Briefcase, Bot, Shield, ExternalLink } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      title: "Operatsion Tizimlar",
      description: "Zamonaviy tizimlar faqat web sayt platformasida",
      icon: Laptop,
      gradient: "from-blue-500 to-indigo-500",
      links: [
        { name: "Windows 10", url: "https://win-10.vercel.app/" },
        { name: "Windows 11", url: "https://windowsxi.vercel.app/Bobur" },
        { name: "Windows 12", url: "https://win12online.com/" },
        { name: "Mac OS", url: "https://chrisbinsunny.github.io/chrishub/#/" },
        { name: "Linux Kali", url: "https://ali-abo-alshamlat.github.io/" },
        { name: "Ubuntu", url: "https://distrosea.com/view/" },
      ]
    },
    {
      title: "Ilovalar Platformasi",
      description: "Ilovalar bilan ishlash uchun zamonaviy platforma",
      icon: Smartphone,
      gradient: "from-cyan-500 to-blue-500",
      links: [
        { name: "JBN Services", url: "https://jbn-services.vercel.app/" },
        { name: "Smart Coding", url: "https://smartcoding.vercel.app/" },
        { name: "My Services", url: "https://my-services.vercel.app/" },
        { name: "Killers Hunt", url: "https://killers-hunt.vercel.app/" },
        { name: "Renessans", url: "https://go-renessans.vercel.app/" },
        { name: "Creative Craft", url: "https://creative-craft.vercel.app/" },
      ]
    },
    {
      title: "O'yinlar Platformasi",
      description: "Multiplayer o'yinlar uchun zamonaviy platforma",
      icon: Gamepad2,
      gradient: "from-purple-500 to-pink-500",
      links: [
        { name: "Ballz Game", url: "https://ballz-game.vercel.app/" },
        { name: "Air Hockey", url: "https://airhockey-uz.vercel.app/" },
        { name: "Snake Game", url: "https://snake-uz.vercel.app/" },
        { name: "Minesweeper Game", url: "https://minesweeper-uz.vercel.app/" },
        { name: "Tic Tac Toe", url: "https://tik-tak-toe-uz.vercel.app/" },
        { name: "Connecting Game", url: "https://connecting-game-uz.vercel.app/" },
      ]
    },
    {
      title: "Buyurtmalar Platformasi",
      description: "Bu yerda men boshqa insonlarga yaratib bergan platformalarim joylashgan",
      icon: Briefcase,
      gradient: "from-amber-500 to-orange-500",
      links: [
        { name: "Portfolio", url: "https://uzb-portfolio.vercel.app/" },
        { name: "Flux Shabloni", url: "https://offer-uz.vercel.app/#work" },
        { name: "Chess 3D", url: "https://chess3d-uz.vercel.app/" },
      ]
    },
    {
      title: "Botlar Platformasi",
      description: "Bu yerda men yaratgan botlarim joylashgan",
      icon: Bot,
      gradient: "from-emerald-500 to-teal-500",
      links: [
        { name: "JBN AI", url: "https://jbobur.vercel.app/" },
        { name: "JBN Music", url: "https://jbobur.vercel.app/" },
        { name: "JBN Video", url: "https://jbobur.vercel.app/" },
        { name: "JBN News", url: "https://jbobur.vercel.app/" },
        { name: "JBN Edu", url: "https://jbobur.vercel.app/" },
        { name: "JBN Games", url: "https://jbobur.vercel.app/" },
      ]
    },
    {
      title: "Maxfiylik Platformasi",
      description: "Bu yerda men yaratgan maxfiylik uchun mo'ljallangan platformalarim joylashgan",
      icon: Shield,
      gradient: "from-rose-500 to-red-500",
      links: [
        { name: "Encrypt", url: "https://shifr.vercel.app/" },
        { name: "Password Generator", url: "https://password-uz.vercel.app/" },
        { name: "SecureVPN", url: "https://vpn-uz.vercel.app/" },
      ]
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">L O Y I H A L A R I M</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Mening tajribam davomida yaratgan turli xil platformalar, operatsion tizim interfeyslari, o'yinlar va xavfsizlikka oid loyihalar bilan tanishib chiqing. Har bir loyiha ustida alohida mehr bilan, eng yangi texnologiyalardan foydalanib ishladim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group h-full flex flex-col"
            >
              <div className="glass p-8 rounded-3xl h-full relative overflow-hidden flex flex-col border border-primary/10 hover:border-primary/50 transition-colors">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                  <div className="p-4 bg-muted/50 rounded-2xl mb-6">
                    <category.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-sm">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                    {category.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs md:text-sm font-medium rounded-xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                      >
                        <span className="truncate">{link.name}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    opacity: hoveredIndex === index ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

