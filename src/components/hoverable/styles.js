import { css, styled } from "styled-components";

export const CSSHoverable = css`
  cursor: pointer;
  transition: 0.2s;
  filter: brightness(0.9);

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export const StyledHoverable = styled.button`
  text-align: left;
  color: white;
  background: none;
  border: none;
  font-size: 1em;

  ${CSSHoverable}
`;
