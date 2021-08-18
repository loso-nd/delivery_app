import { useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import {Input, Form} from './styled';

function Auth({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password,
            email
        }
        const res = await fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(res.ok){
            console.log(userData);
            setCurrentUser(userData)
            history.push('/')
        } else {
            setErrors(userData.message) //How can I display errors on my screen?
        }
    };

    return (
        <>
            
            <Form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <Input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    name="username"  
                    onChange={(e) => setUsername(e.target.value)} 

                ></Input>
                <Input
                    type="text"
                    placeholder="Password"
                    value={password}
                    name="password"  
                    onChange={(e) => setPassword(e.target.value)} ></Input>
                <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"  
                    onChange={(e) => setEmail(e.target.value)} 
                ></Input>
                <Input submit type="submit" value="Sign Up"></Input>
                {errors?errors.map(error => <div key={error.id}>{error}</div>):null}
            </Form>
        </>
    )
}
export default Auth;