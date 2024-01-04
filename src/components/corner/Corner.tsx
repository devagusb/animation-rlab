import { MotionStyle, motion } from "framer-motion";
import { FC } from "react";

type Props = {
  style: MotionStyle;
};
export const Corner: FC<Props> = ({ style }) => {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: 2,
          //   repeat: Infinity,
          //   repeatType: "loop",
          //   repeatDelay: 2,
        }}
        strokeWidth={4}
        stroke={"white"}
        d="M3 0V35H38"
      />
    </motion.svg>
  );
};
