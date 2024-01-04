import styled from "@emotion/styled";
import { Corner } from "./Corner";

const CornerStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
`;

const BottomRight = styled(CornerStyled)`
  bottom: 0;
  right: 0;
`;

export const CornerBottomRight = () => {
  return (
    <BottomRight>
      <div>
        <Corner
          style={{
            rotate: "270deg",
            width: "20px",
            height: "20px",
            position: "absolute",
            top: 0,
            left: 1,
          }}
        />
      </div>
    </BottomRight>
  );
};
