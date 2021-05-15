import React from 'react';
import {
  RegisterSec,
  RegisterContainer,
  RegisterForm,
  RegisterBtn,
} from "./Register.elements";
// import LoginBox from LoginBox
import LoginBox from '../LoginBox'
// import (Input, Form) from Login.elements
import { Input, Form } from "../LoginComponent/Login.elements";

const RegisterComponent = () => {
  return (
    <RegisterSec>
      <RegisterContainer>
        <LoginBox
          title="Already have an account?"
          text="There are advances being made in science and technology everyday, and a good example of this is the"
          btn="Login Now"
          path="/login"
        />
        <RegisterForm>
          <h3>CREATE AN ACCOUNT</h3>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <RegisterBtn type="submit" value="submit">REGISTER</RegisterBtn>
          </Form>
        </RegisterForm>
      </RegisterContainer>
    </RegisterSec>
  );
}

export default RegisterComponent
