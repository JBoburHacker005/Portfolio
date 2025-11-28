import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" /> by Your Name
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
