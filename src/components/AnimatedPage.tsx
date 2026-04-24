import { motion } from "framer-motion";
import { ReactNode } from "react";
import ParticleBackground from "./ParticleBackground";

export default function AnimatedPage({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <>
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95, y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
        exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full min-h-[calc(100vh-116px)] flex flex-col ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
}
