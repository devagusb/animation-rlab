import styled from "@emotion/styled";
import { Corner } from "./Corner";

const CornerStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
`;

const BottomLeft = styled(CornerStyled)`
  bottom: 0;
  left: 0;
`;

export const CornerBottomLeft = () => {
  return (
    <BottomLeft>
      <div>
        <Corner
          style={{
            rotate: "0deg",
            width: "20px",
            height: "20px",
            position: "absolute",
            top: 0,
            left: 1,
          }}
        />
      </div>
    </BottomLeft>
  );
};
