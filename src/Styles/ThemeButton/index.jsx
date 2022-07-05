import React from "react";

import { StyledButton } from "./style";

function ThemeButton({ children, schema, blackText, large }) {
  return (
    <StyledButton large={large} blackText={blackText} schema={schema}>
      {children}
    </StyledButton>
  );
}

export default ThemeButton;
