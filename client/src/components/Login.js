import { useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import {Input, Form} from './styled';

function Login({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password,
        }
        const res = await fetch(`http://localhost:3001/log_in`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        //create has a different status than ok, if the log in is successfull the promise should return a userData.id that should exist in the database.
        if(userData.id){
            console.log(userData);
            setUser(userData)
            history.push('/')
        } else {
            setErrors(userData.message) //How can I display errors on my screen?
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h1>Log In</h1>
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
                    onChange={(e) => setPassword(e.target.value)} 
                ></Input>

                <Input submit type="submit" value="Log in"></Input>
                {errors?errors.map(error => <div key={error.id}>{error}</div>):null}
            </Form>
        </>
    )
}
export default Login;