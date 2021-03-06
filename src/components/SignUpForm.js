import { useState } from 'react'
const baseUrl = 'http://localhost:3000/users/'

export default function SignUpForm({signUp, alerts}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = ({target}) => {
        target.name === "username" 
        ? setUsername(target.value)
        : setPassword(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username, 
            password
        }
        signUp(user)
    }

    return (
        <div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2 className="signup-title">Signup</h2>
                <label className="auth-labels">Username:</label>
                <input 
                    className="auth-inputs" 
                    name="username" 
                    value={ username } 
                    onChange={ handleChange } 
                />
                <label className="auth-labels">Password:</label>
                <input 
                    className="auth-inputs" 
                    name="password" 
                    type="password"
                    value={ password } 
                    onChange={ handleChange } 
                />
                <input className="auth-submit-button" type="submit" name="Submit" />
            </form>
        </div>
    )
}
