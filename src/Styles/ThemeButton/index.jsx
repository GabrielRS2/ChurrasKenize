import React from "react";

import { StyledButton } from "./style";

function ThemeButton({ children, schema, blackText, large, type }) {
  return (
    <StyledButton
      type={type}
      large={large}
      blackText={blackText}
      schema={schema}
    >
      {children}
    </StyledButton>
  );
}

export default ThemeButton;
