import React, {useState} from 'react'
import styled from "styled-components";
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import { Logo, Divider, Button} from './styled';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <Wrapper>
            <Logo>Transport Delivery</Logo>
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
                    <SignupForm onLogin={onLogin} />
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