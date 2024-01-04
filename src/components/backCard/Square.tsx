import styled from "@emotion/styled";
import { motion } from "framer-motion";

const LowDivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  margin-bottom: 20px;
  position: relative;
`;
const LowDiv = styled.div`
  height: 10px;
`;

export const Square = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LowDivContent>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
      </LowDivContent>
      <LowDivContent>
        <motion.div
          style={{
            position: "relative",
            top: 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "reverse",
          }}
          animate={{
            y: [8, 3, 6, 2, 4, 10,1],
          }}
        >
          __
        </motion.div>
        <motion.div
          style={{
            position: "relative",
            top: 0,
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "reverse",
          }}
          animate={{
            y: [-3, -1, 7, 1, -2, 1,1],
          }}
        >
          __
        </motion.div>
      </LowDivContent>
      <LowDivContent>
        <motion.div
          style={{
            position: "relative",
            top: 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "reverse",
          }}
          animate={{
            y: [12, 1, 3, 6, 4, 14,14],
          }}
        >
          __
        </motion.div>
        <motion.div
          style={{
            position: "relative",
            top: 0,
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0,
            // bounce: 0.8,
            // type:'tween',
            repeatType: "reverse",
          }}
          animate={{
            y: [3, -1, 6, 8, -4, 7,7],
          }}
        >
          __
        </motion.div>
      </LowDivContent>
      <LowDivContent>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
        <LowDiv>___</LowDiv>
      </LowDivContent>
    </div>
  );
};
