import React from "react";
import { StyledContentWrapper } from "./styles";

function ContentWrapper(props) {
  const { children } = props;
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}

export { ContentWrapper };
