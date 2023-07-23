import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import './signup.css';


const SignUpPage = () => {
    const [userFormData, setUserFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const [signupUser] = useMutation(SIGNUP_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await signupUser({
                variables: { ...userFormData },
            });

            Auth.login(data.signup.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            name: '',
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <section className='signup-section'>
                <h2>SignUp</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>Name</label><br />
                    <input
                        type='text'
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={userFormData.name}
                    />
                    <br /><br />
                    <label>UserName</label><br />
                    <input
                        type='text'
                        name="username"
                        placeholder="Username"
                        onChange={handleInputChange}
                        value={userFormData.username} />
                    <br /><br />
                    <label>Email</label><br />
                    <input
                        type='email'
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={userFormData.email} />
                    <br /><br />
                    <label>Password</label><br />
                    <input
                        type='password'
                        name="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={userFormData.password} />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default SignUpPage;