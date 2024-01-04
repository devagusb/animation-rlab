import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FrontCard } from "./frontCard/FrontCard";
import { BackCard } from "./backCard/BackCard";
import { CornerTopLeft } from "./corner/CornerTopLeft";
import { CornerTopRight } from "./corner/CornerTopRight";
import { CornerBottomLeft } from "./corner/CornerBottomLeft";
import { CornerBottomRight } from "./corner/CornerBottomRight";
import {
  ANIMATIONS_DEFAULT,
  bodyCardBackVariants,
  bodyCardFrontVariants,
  cardVariants,
} from "../variants";
import { LineFooter } from "./line/LineFooter";

const CornerDiv = styled(motion.div)`
  width: 200px;
  height: 39px;
  position: relative;
  background-color: #000;
  opacity: 0;
  /* padding: 0 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled(motion.div)`
  width: 2px;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;

  /* transform: translateY(0) translateX(0) rotate(-55deg); */
`;
const LineTop = styled(Line)`
  transform: rotate(-45deg) translateY(0) translateX(4px);
`;
const LineLeft = styled(Line)`
  transform: rotate(-45deg) translateY(-3px) translateX(0);
`;
const LineBottom = styled(Line)`
  transform: rotate(-45deg) translateY(0) translateX(-5px);
`;
const LineRight = styled(Line)`
  transform: rotate(-45deg) translateY(3px) translateX(0);
`;

const CardAnimate = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [showNumbers, setShowNumbers] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start(ANIMATIONS_DEFAULT[0]);
    return () => controls.stop();
  }, []);

  const onAnimationComplete = () => {
    const currentIndex = currentAnimationIndex + 1;
    if (currentIndex >= ANIMATIONS_DEFAULT.length) {
      return;
    }
    setCurrentAnimationIndex(currentIndex);
    const animation = ANIMATIONS_DEFAULT[currentIndex];
    if (animation == "second") {
      setShowNumbers(true);
    }
    controls.start(animation);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
          width: "100vw",
          height: "100vh",
          paddingTop: "2rem",
        }}
      >
        <CornerDiv
          variants={cardVariants}
          animate={controls}
          onAnimationComplete={onAnimationComplete}
        >
          <CornerTopLeft />
          <CornerTopRight />
          <CornerBottomLeft />
          <CornerBottomRight />

          <FrontCard
            controls={controls}
            variants={bodyCardFrontVariants}
            showNumbers={showNumbers}
          />
          <BackCard controls={controls} variants={bodyCardBackVariants} />

          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "20px",
            }}
          ></div>
          <motion.div
            style={{
              position: "absolute",
              bottom: 1,
              textAlign: "center",
            }}
            transition={{ delay: 7.5, duration: 0 }}
            animate={{
              rotateY: "180deg",
            }}
          >
            <LineTop>
              <LineFooter controls={controls} />
            </LineTop>
            <LineLeft>
              <LineFooter controls={controls} reverse />
            </LineLeft>
            <LineBottom>
              <LineFooter controls={controls} />
            </LineBottom>
            <LineRight>
              <LineFooter controls={controls} reverse />
            </LineRight>
          </motion.div>
        </CornerDiv>
      </div>
    </>
  );
};

export default CardAnimate;
