import {useState} from 'react'

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
            <section>
                <h2 style={{color: "black", fontSize: "24px", font-weight: bold, text-align: center}}>Login</h2>
                <form onSubmit={onLoginSubmit}>
                <label style={{color: "blue", fontSize: "16px", font-weight: bold}}>Email</label><br/>
                    <input 
                        type='email' 
                        name="email"
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)}>
                    </input><br/><br/>
                    <label style={{color: "blue", fontSize: "16px", font-weight: bold}}>Password</label><br/>
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
