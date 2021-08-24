import React, {useState} from 'react'
import {Button, Input, FormField, Label} from "../styles";

function LoginForm({ onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // const history = useHistory()

    function handleSubmit(e){ // why or why not use async here...
        e.preventDefault()
        setIsLoading(true);
        async function login(){
            const res = await fetch("/login", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({ username, password }),
             })
            // const userData = await res.json();
            //create has a different status than ok, if the log in is successfull the promise should return a userData.id that should exist in the database.
            //if(userData.id){
                const userData = await res.json();
            if(userData.id){
                console.log(userData);
                setErrors(null)
                //history.push("/")
                onLogin(userData)
            } else {
                setIsLoading(false);
                setErrors(userData.errors) //How can I display errors on my screen?
            }
            };
        login();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                {errors ? errors.map(error => <div key={error}>{error}</div>):null}
            </form>
        </>
    )
}
export default LoginForm;