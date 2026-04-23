import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(35,28%,97%)] selection:bg-primary selection:text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
