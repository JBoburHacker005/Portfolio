import { motion } from "framer-motion";
import { ReactNode } from "react";
import ParticleBackground from "./ParticleBackground";

export default function AnimatedPage({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <>
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 50, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-full min-h-[calc(100vh-116px)] flex flex-col ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
}
