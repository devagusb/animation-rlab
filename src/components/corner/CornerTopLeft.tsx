import styled from "@emotion/styled";
import { Corner } from "./Corner";

const CornerStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
`;

const TopLeft = styled(CornerStyled)`
  top: 0;
  left: 0;
`;

export const CornerTopLeft = () => {
  return (
    <TopLeft>
      <div>
        <Corner
          style={{
            rotate: "90deg",
            width: "20px",
            height: "20px",
            position: "absolute",
            top: 1,
            left: 0,
          }}
        />
      </div>
    </TopLeft>
  );
};
