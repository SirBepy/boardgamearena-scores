import { keyframes, styled } from "styled-components";
import { themeColors } from "../../utils/theme";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalBackground = styled.div`
  position: absolute;
  background-color: #000000aa;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const openModal = keyframes`
  from {
    margin-top: 200px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`;

const closeModal = keyframes`
  from {
    margin-top: 0;
    opacity: 1;
  }
  to {
    margin-top: 200px;
    opacity: 0;
  }
`;

export const StyledModal = styled.div`
  overflow-y: auto;
  width: 80vw;
  height: 80vh;
  margin-top: 0;
  background-color: ${themeColors.primary};
  border-radius: 1em;
  animation-name: ${openModal};
  animation-duration: 0.3s;

  &.close-modal {
    animation-name: ${closeModal};
    animation-duration: 0.3s;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  box-sizing: border-box;

  h1 {
    margin: 1em 0;
  }

  span,
  button {
    height: 1.5em;
    width: 1.5em;
  }

  button {
    background: none;
    display: block;
    text-align: center;
    border: 2px solid white;
    border-radius: 100%;
    line-height: 1.4em;
    font-size: 1.5em;
    color: white;
    transition: 0.2s;
    opacity: 0.8;
  }
`;

export const StyledGames = styled.div`
  margin: auto;

  table {
    width: 240px;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .place-1st {
    background-color: #f5f24066;
  }
  .place-2nd {
    background-color: #c7c7c766;
  }
  .place-3rd {
    background-color: #b06f3e66;
  }

  .hide {
    opacity: 0.3;
  }
`;
