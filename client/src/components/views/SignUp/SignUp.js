import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import './signup.css';
import Profile1 from '../../../images/Profile1.png';
import Profile2 from '../../../images/Profile2.png';
import Profile3 from '../../../images/Profile3.png';


const SignUpPage = () => {
    const [userFormData, setUserFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        coverPicId: '',
    });

    const [signupUser] = useMutation(SIGNUP_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting form with data:", userFormData);

        try {
            console.log(userFormData);
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
            coverPicId: '',
        });
    };

    const selectProfile = (src) => {
        setUserFormData({ ...userFormData, coverPicId: src });
        console.log("Selected profile:", src);
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
                    <label>Choose Your Profile Picture</label>
                    <img src={Profile1}onClick={() => selectProfile('Profile1.png')}className={`profile-img ${userFormData.coverPicId === 'Profile1.png' ? 'selected' : ''}`}alt="Profile 1"/>
                    <img src={Profile2}onClick={() => selectProfile('Profile2.png')}className={`profile-img ${userFormData.coverPicId === 'Profile2.png' ? 'selected' : ''}`}alt="Profile 2"/>
                    <img src={Profile3}onClick={() => selectProfile('Profile3.png')}className={`profile-img ${userFormData.coverPicId === 'Profile3.png' ? 'selected' : ''}`}alt="Profile 3"/>                    
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default SignUpPage;