import React, { useState } from 'react';
import './login.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';

import Auth from '../../../utils/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [login, { error }] = useMutation(LOGIN_USER)
    // const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
    //   const { name, value } = event.target;
  
    //   setFormState({
    //     ...formState,
    //     [name]: value,
    //   });
    };

    const onLoginSubmit = async (e) => {

    e.preventDefault();
    const formData = {email, password};




    try{
        const { data } = await login({
            variables: {...formData},
        })
        Auth.login(data.login.token)


        // auth.login()

    } catch (e) {
        console.log(e)
    }
    setEmail('')
    setPassword('')





    // console.log(formState);
    
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }

    // // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });

    }

    return (
        <>
            <section className='loginInfo' id="loginInfo">
                <h2>Log In</h2>
                <form onSubmit={onLoginSubmit}>
                    <label>Email</label><br />
                    <input
                        type='email'
                        name="email"
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)}>
                    </input><br /><br />
                    <label>Password</label><br />
                    <input
                        type='password'
                        name="password"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}>

                    </input><br/><br/>
                    {/* <button
                        className='btn btn-block btn-info'
                        style={{cursor: 'pointser'}}
                        type='submit'
                        >
                            Submit
                        </button> */}
                    <button type="submit">Log In</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage;
