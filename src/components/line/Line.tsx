import { motion } from "framer-motion";

export const Line2=() => {
  return (
    <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay:6
        //   repeat: Infinity,
        //   repeatType: "loop",
        //   repeatDelay: 2,
        }}
        strokeWidth={2}
        stroke={'white'}
        d="M 0, 5 L 100, 5"
      />
    </svg>
  );
}
