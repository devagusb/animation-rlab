import styled from "@emotion/styled";
import { AnimationControls, Variants, motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FC } from "react";
import imagen from "../../assets/back-image.gif";
import { Square } from "./Square";
type Props = {
  controls: AnimationControls;
  variants: Variants;
};

const OnOfDiv = styled(motion.div)`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 3px;
    width: 6px;
    height: 6px;
    background-color: #43d743;
  }
`;

export const BackCard: FC<Props> = ({ controls, variants }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        width: "inherit",
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "space-around",
        padding: "1rem",
        overflow: "hidden",
        // gap: "1rem",
      }}
      initial={{
        opacity: 0,
      }}
      variants={variants}
      animate={controls}
    >
      <Square />
      <div>
        <Typography variant="body1">ANIMUS REC.</Typography>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Typography variant="body1">#3335 </Typography>
          <OnOfDiv
            transition={{ repeat: Infinity, duration: 1, delay: 1 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
          />
          <Typography variant="body1">ON </Typography>
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <motion.img
          style={{
            maxHeight: 300,
            maxWidth: 150,
            marginTop: "2rem",
            objectFit: "contain",
          }}
          //   src="https://media3.giphy.com/media/WqNmbi4La3IJg9PhcR/giphy.gif?cid=ecf05e4739e449bjpudai8yvkm5vg14vcz9nr43zk7kj6uuu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          src={imagen}
          alt="test-img"
        />
      </div>
    </motion.div>
  );
};
