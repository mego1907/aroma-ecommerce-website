import React from 'react'
import LoginBox from '../LoginBox'
import { LoginContainer, LoginSec, LoginForm, Form, Input, Button } from "./Login.elements";

const LoginComponent = () => {
  return (
    <LoginSec>
      <LoginContainer>
        <LoginBox
          title="New to our website?"
          text="There are advances being made in science and technology everyday, and a good example of this is the"
          btn="Create an Account"
          path="/register"
        />
        <LoginForm>
          <h3>LOG IN TO ENTER</h3>
          <Form>
            <Input
              type="text"
              placeholder="Username"
            />
            <Input
              type="password"
              placeholder="Password"
            />
            <Button type="submit" value="submit">
              Log In
            </Button>
          </Form>
        </LoginForm>
      </LoginContainer>
    </LoginSec>
  );
}

export default LoginComponent;
