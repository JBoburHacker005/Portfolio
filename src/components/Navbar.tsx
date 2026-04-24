import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Clock, CloudSun } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [time, setTime] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Men haqimda", href: "/about" },
    { name: "Ko'nikmalar", href: "/skills" },
    { name: "Loyihalar", href: "/projects" },
    { name: "Aloqa", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar (Clock & Weather) */}
      <div className="bg-[#050505] text-primary w-full py-1.5 px-4 md:px-8 flex justify-between items-center text-xs border-b border-primary/10">
        <div className="flex items-center gap-1.5 font-medium">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-white">{time || "00:00:00"}</span>
        </div>
        <div className="flex items-center gap-2 font-medium">
          <div className="flex items-center gap-1.5">
            <CloudSun className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold">22°C</span>
          </div>
          <span className="text-white/80">Sunny</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-1 bg-black rounded-lg border border-primary/20 shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300">
              <img src="/brand-logo.png" alt="JBN Logo" className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white hidden sm:block tracking-tight group-hover:text-cyan-400 transition-colors">
              Jovliyev Bobur Nuriddin o'g'li
            </h1>
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/') && location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                    isActive
                      ? "text-white border-purple-500 shadow-[0_4px_10px_-2px_rgba(168,85,247,0.5)]"
                      : "text-muted-foreground border-transparent hover:text-white hover:border-cyan-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden md:flex border-primary/30 text-white hover:bg-primary/20 hover:text-white rounded-full px-5 font-semibold text-sm h-10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-500 bg-transparent"
            >
              CV Yuklash
            </Button>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full px-6 font-semibold text-sm h-10 border-0 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
              Ishga taklif
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
