import React, { useState } from 'react';
import 'client/src/components/views/login/login.css';
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginSubmit = (e) => {

        e.preventdefault()
        const formData = {email, password};

        console.log(formData)

        setEmail('')
        setPassword('')
    }

    return (
        <>
            <section classname='loginInfo'>
                <h2>Login</h2>
                <form onSubmit={onLoginSubmit}>
                <label>Email</label><br/>
                    <input 
                        type='email' 
                        name="email"
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)}>
                    </input><br/><br/>
                    <label>Password</label><br/>
                    <input 
                        type='password'
                        name="password" 
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}>
                    </input><br/><br/>
                </form>
            </section>
        </>
    )
}

export default LoginPage;
