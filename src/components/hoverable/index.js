import React from "react";
import { StyledHoverable } from "./styles";

const Hoverable = (props) => {
  const { children, onClick } = props;

  return <StyledHoverable onClick={onClick}>{children}</StyledHoverable>;
};

export { Hoverable };
