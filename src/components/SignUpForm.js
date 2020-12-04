import { useState } from 'react'

export default function SignUpForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = ({target}) => {
        target.name === "username" 
        ? setUsername(target.value)
        : setPassword(target.value)
    }

    return (
        <div>
            <form className="signup-form">
                <h2>Signup</h2>
                <label>Username:</label>
                <input name="username" value={ username } onChange={ handleChange } />
                <label>Password:</label>
                <input name="password" value={ password } onChange={ handleChange } />
                <input type="submit" name="Submit" />
            </form>
        </div>
    )
}
