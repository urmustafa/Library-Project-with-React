import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from './Login.style'
import { useNavigate } from 'react-router-dom'

const Login = ({setCurrentUser}) => {
  const navigate=useNavigate();



  const handleSubmit=(e)=>{
    e.preventDefault();
    setCurrentUser("mustafa")
    sessionStorage.setItem("user","mustafa")
    navigate(-1);
  }


  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="user" required>
          </StyledInput>
          <StyledInput type="text" placeholder="password" required>
          </StyledInput>
          <StyledButton type="Submit">
            Login
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login