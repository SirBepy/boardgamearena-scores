import { keyframes, styled } from "styled-components";
import { CSSHoverable } from "../hoverable/styles";
import { themeColors } from "../../utils/theme";

export const StyledSettingsButton = styled.button`
  position: fixed;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-radius: 0 0 0 1em;
  color: white;
  top: 0;
  right: 0;
  height: 2em;
  width: 2em;
  font-size: 2em;

  ${CSSHoverable}
`;

const sideMenuWidth = "400px";

export const StyledSideMenu = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? 0 : `-${sideMenuWidth}`)};
  transition: 0.2s;

  height: 100vh;
  box-sizing: border-box;
  width: ${sideMenuWidth};
  padding: 2em;
  background-color: ${themeColors.primary};

  h2 {
    text-align: left;
    margin: 1em 0 0 -0.5em;
    color: ${themeColors.secondary};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledSideMenuBackground = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #000000aa;
`;

export const StyledGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
`;

export const StyledDataInput = styled.input`
  padding: 0.5em;
  background-color: ${themeColors.secondary};
  border: 0;
  border-radius: 1em;
`;

export const StyledSaveButton = styled.button`
  ${CSSHoverable}

  cursor: pointer;
  color: white;
  font-size: 1.2em;
  background-color: #0eb53b;
  border-radius: 1em;
  border: none;
  padding: 0.5em;
`;
