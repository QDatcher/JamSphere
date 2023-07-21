import React, { useState } from 'react';
import './login.css';
import { useMutation } from '@apollo/client';


const LoginPage = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const onLoginSubmit = (e) => {
``
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
                    <button
                        className='btn btn-block btn-info'
                        style={{cursor: 'pointser'}}
                        type='submit'
                        >
                            submit
                        </button>
                </form>
            </section>
        </>
    )
}

export default LoginPage;
