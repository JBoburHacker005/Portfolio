import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Xabar yuborildi!",
      description: "Tez orada siz bilan bog'lanaman.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: "jbobur005@gmail.com", href: "mailto:jbobur005@gmail.com", color: "text-red-400" },
    { icon: Phone, label: "Phone", value: "+998 (93) 005-42-87", href: "tel:+998930054287", color: "text-green-400" },
    { icon: Send, label: "Telegram", value: "Jovliyev_Bobur", href: "https://t.me/Jovliyev_Bobur", color: "text-blue-400" },
    { icon: Github, label: "GitHub", value: "github.com/JBoburHacker005", href: "https://github.com/JBoburHacker005", color: "text-gray-200" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/Bobur005", href: "https://linkedin.com/in/Bobur005", color: "text-blue-500" },
    { icon: Instagram, label: "Instagram", value: "j.bobur005", href: "https://instagram.com/j.bobur005", color: "text-pink-500" },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactLinks.map((info, index) => (
              <motion.a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                key={info.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300 gap-3 text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{info.label}</h3>
                  <p className="text-sm text-muted-foreground break-words w-full px-2">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl h-full flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-center">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors resize-none py-4"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary transition-all duration-300 py-6 text-lg mt-auto hover:bg-indigo-600 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

