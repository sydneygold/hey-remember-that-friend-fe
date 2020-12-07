import { useState } from 'react'

export default function LoginForm({login}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    const handleChange = ({target}) => {
        target.name === "username" 
        ? setUsername(target.value)
        : setPassword(target.value)
    }

    return (
        <div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2 className="signup-title">Login</h2>
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
