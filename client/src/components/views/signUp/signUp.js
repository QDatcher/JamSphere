import {useState} from 'react'


const SignUp = () => {
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
            <section>
                <h2>SignUp</h2>
                <form onSubmit={onSubmitHandler}>
                    <label>First Name</label><br/>
                    <input 
                        type='text' 
                        name="firstName"
                        placeholder="First Name"
                        onChange={event => setFirstName(event.target.value)}>
                    </input><br/><br/>
                    <label>Last Name</label><br/>
                    <input 
                        type='text'
                        name="lastName" 
                        placeholder="Last Name"
                        onChange={event => setLastName(event.target.value)}>
                    </input><br/><br/>
                    <label>UserName</label><br/>
                    <input 
                        type='text'
                        name="username" 
                        placeholder="Username"
                        onChange={event => setUserName(event.target.value)}>
                    </input><br/><br/>
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
                    <input type="submit">Submit</input>
                </form>
            </section>
        </>
    )
}

export default SignUp