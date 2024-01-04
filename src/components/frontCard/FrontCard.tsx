import { AnimationControls, Variants, motion } from "framer-motion";

import { FC } from "react";
import image from "../../assets/front-image.gif";
import { GenerateNumbersRandom } from "./GenerateNumbersRandom";
type Props = {
  controls: AnimationControls;
  variants: Variants;
  showNumbers: boolean;
};

export const FrontCard: FC<Props> = ({ controls, variants, showNumbers }) => {
  return (
    <motion.div
      // transition={{ delay: bodyCardAnimation.duration * 0.3, duration: 0 }}
      initial={{
        opacity: 0,
      }}
      variants={variants}
      animate={controls}
      style={{
        position: "absolute",
        top: 0,
        width: "inherit",
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "right",
        }}
      >
        {showNumbers && (
          <motion.div
            transition={{
              delay: 1,
              staggerChildren: 0.2,
              delayChildren: 1,
              duration: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
          >
            <div>
              <GenerateNumbersRandom showNumbers={showNumbers} size={1} />
            </div>
            <div>
              <GenerateNumbersRandom showNumbers={showNumbers} size={2} />
            </div>
            <div>
              <GenerateNumbersRandom showNumbers={showNumbers} size={4} />
            </div>
            <div>
              <GenerateNumbersRandom showNumbers={showNumbers} size={6} />
            </div>
            <div>
              <GenerateNumbersRandom showNumbers={showNumbers} size={7} />
            </div>
          </motion.div>
        )}
      </div>

      <div
        style={
          {
            //   overflow: "hidden",
          }
        }
      >
        <motion.img
          style={{
            maxHeight: 200,
            maxWidth: 150,
            // marginTop: "1rem",
            objectFit: "contain",
          }}
          //   src="https://media3.giphy.com/media/WqNmbi4La3IJg9PhcR/giphy.gif?cid=ecf05e4739e449bjpudai8yvkm5vg14vcz9nr43zk7kj6uuu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          src={image}
          alt="test-img"
        />
      </div>
    </motion.div>
  );
};
