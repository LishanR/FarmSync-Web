import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedCard = ({ children, delay = 0, scrollDirection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: scrollDirection === "up" ? -30 : 30,
        scale: 0.97
      }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : scrollDirection === "up" ? -20 : 20,
        scale: isInView ? 1 : 0.98,
        transition: {
          delay: delay * 0.15,
          duration: 0.4,
          ease: "easeInOut"
        }
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};
