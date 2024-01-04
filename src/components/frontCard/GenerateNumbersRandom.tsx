import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { NumberRandom } from "./NumberRandom";

const straggerNumber = stagger(0.2, { startDelay: 1, from: "last" });

export const GenerateNumbersRandom = ({
  size = 2,
  showNumbers,
}: {
  size: number;
  showNumbers: boolean;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (showNumbers) {
      animate(
        ".number-random",
        {
          opacity: 1,
        },
        { delay: straggerNumber }
      );
    }
  }, [showNumbers]);

  const numbersRender = Array.from({ length: size }).map((_, index) => (
    <div key={index} className="number-random" style={{ opacity: 0 }}>
      <NumberRandom  />
    </div>
  ));
  return (
    <div ref={scope} style={{ display: "flex", justifyContent: "end" }}>
      {numbersRender}
    </div>
  );
};
