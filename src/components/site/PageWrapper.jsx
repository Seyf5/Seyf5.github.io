import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      className="min-h-[calc(100vh-5rem)]"
    >
      {children}
    </motion.div>
  );
}
