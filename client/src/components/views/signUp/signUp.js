import React, { useState } from 'react';
import './signup.css';


const SignUpPage = () => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmitHandler = (e) =>{
        e.preventdefault()
        const formData = {firstName, lastName, email, userName, password};

        console.log(formData)

        setUserName('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        
    }
    return (
        <>
            <section className='signup-section'>
                <h2>Sign Up</h2>
                <form onSubmit={onSubmitHandler}>
                    <label>First Name:</label><br/>
                    <input 
                        type='text' 
                        name="firstName"
                        placeholder="First Name"
                        onChange={event => setFirstName(event.target.value)}
                    />
                    <br/><br/>
                    <label>Last Name:</label><br/>
                    <input 
                        type='text'
                        name="lastName" 
                        placeholder="Last Name"
                        onChange={event => setLastName(event.target.value)} />
                    <br/><br/>
                    <label>Username:</label><br/>
                    <input 
                        type='text'
                        name="username" 
                        placeholder="Username"
                        onChange={event => setUserName(event.target.value)} />
                    <br/><br/>
                    <label>Email:</label><br/>
                    <input 
                        type='email'
                        name="email" 
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)} />
                    <br/><br/>
                    <label>Password:</label><br/>
                    <input 
                        type='password'
                        name="password" 
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)} />
                    <br/><br/>
                    <button type="submit">Sign Me Up!</button>
                </form>                 
            </section>
        </>
    )
}

export default SignUpPage;