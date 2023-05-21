import { styled } from "styled-components";
import { themeColors } from "../../utils/theme";

export const StyledStat = styled.div`
  display: flex;
  gap: 0.75em;
  justify-content: center;

  > :first-child {
    color: ${themeColors.secondary};
  }
`;
