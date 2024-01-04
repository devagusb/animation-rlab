import styled from "@emotion/styled";
import { Corner } from "./Corner";

const CornerStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
`;

const TopRight = styled(CornerStyled)`
  top: 0;
  right: 0;
`;

export const CornerTopRight = () => {
  return (
    <TopRight>
      <div>
        <Corner
          style={{
            rotate: "180deg",
            width: "20px",
            height: "20px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    </TopRight>
  );
};
