import React, {useState} from 'react'
import {Button, Error, Input, FormField, Label} from "../styles";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e){ // why or why not use async here...
        e.preventDefault()
        setIsLoading(true);
        const user = {
            username,
            password,
        }
            async function login() {
                const res = await fetch('log_in', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            });
            const userData = await res.json();
            //create has a different status than ok, if the log in is successfull the promise should return a userData.id that should exist in the database.
            //if(userData.id){
            if(res.ok){
                setIsLoading(false);
                console.log(userData);
                onLogin(userData)
            } else {
                const err = await res.json();
                setErrors(err.errors) //How can I display errors on my screen?
            }
            };
        login();
    };

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="username"> Username</Label>
                    <Input
                        type="text"
                        id="username"
                        autoComplete="off"
                        placeholder="User Name"
                        value={username}
                        name="username"  
                        onChange={(e) => setUsername(e.target.value)} 

                    ></Input>
                </FormField>
                <FormField>
                    <Label htmlFor="password"> Password</Label>
                    <Input
                        type="password"
                        id="username"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={password}
                        name="password"  
                        onChange={(e) => setPassword(e.target.value)} 
                    ></Input>
                </FormField>
                <FormField>
                    <Button variant="outline" color="secondary" type="submit">
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </FormField>
                <FormField>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </FormField>
            </form>
        </>
    )
}
export default LoginForm;