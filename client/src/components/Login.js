//import { useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import styled from "styled-components";
import LoginForm from "../components/LoginForm"
import SigninForm from "../components/SigninForm"
import { Logo, Divider, Button} from './styled';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <Wrapper>
            <Logo>Transport Or Deliver</Logo>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <Divider />
                    <p>
                        Don't have an account &nbsp;
                        <Button color='primary' onClick={() => setShowLogin(false)}>
                            Sign Up
                        </Button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <Divider />
                    <p>
                        Already have an account? &nbsp;
                        <Button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </Button> 
                    </p>
                </>
            )}
        </Wrapper>

        </>
    )
}
export default Login;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;