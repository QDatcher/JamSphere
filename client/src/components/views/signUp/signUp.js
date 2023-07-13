import {useState} from 'react'


const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <>
            <section>
                <h2>SignUp</h2>
                <form>
                    <label>First Name</label><br/>
                    <input type='text'></input><br/><br/>
                    <label>Last Name</label><br/>
                    <input type='text'></input><br/><br/>
                    <label>UserName</label><br/>
                    <input type='text'></input><br/><br/>
                    <label>Email</label><br/>
                    <input type='email'></input><br/><br/>
                    <label>Password</label><br/>
                    <input type='password'></input><br/><br/>

                </form>
            </section>
        </>
    )
}

export default SignUp