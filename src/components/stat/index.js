import React from "react";
import { StyledStat } from "./styles";

const Stat = (props) => {
  const { name, value } = props;

  return (
    <StyledStat>
      <span>{name}:</span>
      <span>{value || ''}</span>
    </StyledStat>
  );
};

export { Stat };
