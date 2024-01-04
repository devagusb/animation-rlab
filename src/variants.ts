import { Transition, Variants } from "framer-motion";

export const ANIMATIONS_DEFAULT = ["initial", "second", "third"];

type VariantsCustom = Variants & {
  [key: string]: { transition: Transition & { duration: number } };
};
export const cardVariants: VariantsCustom = {
  [ANIMATIONS_DEFAULT[0]]: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[1]]: {
    height: 300,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[2]]: {
    rotateY: "180deg",
    transition: {
      delay: 3,
      duration: 1,
    },
    // rotateY: "1deg",
  },
};
export const bodyCardFrontVariants: Variants = {
  [ANIMATIONS_DEFAULT[0]]: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  [ANIMATIONS_DEFAULT[1]]: {
    opacity: 1,
    transition: {
      delay: cardVariants[ANIMATIONS_DEFAULT[1]].transition.duration * 0.5,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[2]]: {
    opacity: 0,
    transition: {
      delay: (cardVariants[ANIMATIONS_DEFAULT[2]].transition.delay ?? 1) * 1.1,
      ease: "easeOut",
      duration: 0,
    },
  },
};
export const bodyCardBackVariants = {
  [ANIMATIONS_DEFAULT[0]]: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[1]]: {
    opacity: 0,
    rotateY: "180deg",
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  [ANIMATIONS_DEFAULT[2]]: {
    opacity: 1,

    transition: {
      delay:
        (cardVariants[ANIMATIONS_DEFAULT[2]].transition.delay ?? 0) +
        cardVariants[ANIMATIONS_DEFAULT[2]].transition.duration * 0.5,
      duration: 1,
    },
  },
};
export const footerVariants: Variants = {
  [ANIMATIONS_DEFAULT[0]]: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[1]]: {
    width: "8px",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  [ANIMATIONS_DEFAULT[2]]: {
    backgroundColor: "#008000",
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
