"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="h-12 w-12 rounded-none shadow-lg border border-border bg-card hover:bg-muted"
          >
            <ArrowUp className="h-5 w-5" aria-hidden />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
