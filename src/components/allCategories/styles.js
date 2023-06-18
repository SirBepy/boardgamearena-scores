import { styled } from "styled-components";
import { themeColors } from "../../utils/theme";

export const StyledCategoryWrapper = styled.div`
  margin: auto;
`

export const StyledCategory = styled.div`
  width: 240px;
  background-color: ${themeColors.primary};
  padding: 1em;
  border-radius: 0.5em;

  ol {
    padding-left: 2em;

    li::marker {
    color: ${themeColors.secondary};
    }
  }

  h2 {
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    text-align: left;
    color: ${themeColors.secondary};
  }
`;

export const CardPercentage = styled.span`
  color: ${themeColors.secondary};
`
