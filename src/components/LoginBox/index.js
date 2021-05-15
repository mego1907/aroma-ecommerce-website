import React from 'react';
import { Box, BoxBody, BoxBtn } from "./LoginBox.elements";

const LoginBox = ({title, text, btn, path}) => {
  return (
    <Box>
      <BoxBody>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <BoxBtn to={path}>{btn}</BoxBtn>
      </BoxBody>
    </Box>
  );
}

export default LoginBox
