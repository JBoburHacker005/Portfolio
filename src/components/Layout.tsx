import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden pt-[116px]">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow w-full relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
