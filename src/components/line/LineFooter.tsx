import { AnimationControls, Variants, motion } from "framer-motion";
import { FC } from "react";
import { ANIMATIONS_DEFAULT } from "../../variants";

type Props = {
  reverse?: boolean;
  controls: AnimationControls;
};

const variants: Variants = {
  [ANIMATIONS_DEFAULT[0]]: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[1]]: {
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[2]]: {
    stroke: "#36bf40",
    transition: {
      delay: 0,
      duration: 1,
    },
  },
};
export const LineFooter: FC<Props> = ({ reverse = false, controls }) => {
  return (
    <div
      style={{
        width: 8,
        height: 10,
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          zIndex: 1000,
          position: "absolute",
          width: "inherit",
          height: "inherit",
          top: 0,
          left: 0,
        }}
      >
        <motion.line
          x1={reverse ? "9" : "1"}
          y1="9"
          x2={reverse ? "1" : "9"}
          y2="9"
          stroke={"#383b38"}
          strokeWidth={2}
          strokeLinecap="round"
          variants={variants}
          initial={{
            opacity:0,
            pathLength: 0,
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};
