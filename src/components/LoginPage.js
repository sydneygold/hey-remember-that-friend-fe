import { useState } from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import HomePage from './HomePage'
const baseUrl = 'http://localhost:3000/users/'

export default function LoginPage() {
    const [clickedSignup, setClickedSignup] = useState(false)
    const [clickedLogin, setClickedLogin] = useState(false)
    const [user, setUser] = useState({})
    const [alerts, setAlerts] = useState([])

    const triggerSignupForm = () => {
        setClickedSignup(!clickedSignup)
    }
    
    const triggerLoginForm = () => {
        setClickedLogin(!clickedLogin)
    }

    const showDescription = () => {
        return (
            <div>
                <p className="description">
                    Hey remember that friend? That person you really get along with but haven't talked to in five months? Don't you hate losing connection with great people? Here you can make an account and create friend cards with any information you need to keep up with everyone's busy lives.
                </p>
            </div>
        )
    }

    const showSignupForm = () => {
        return clickedSignup === true 
        ? <SignUpForm signUp={ signUp } alerts={alerts}/>
        :  showDescription()
    }

    const showLoginForm = () => {
        return clickedLogin === true
        ? <LoginForm login={login} />
        : showDescription()
    }

    const signUp = (user) => {
        setUser(user)

        fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(response => {
            if(response.error){
                setAlerts(response.errors)
            }
            else {
                localStorage.setItem('token', response.token)
                setUser({user: response.user})
            }
        })
    }

    const login = ({username, password}) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(response => {
            if(response.error){
                setAlerts(response.errors)
            }
            else {
                localStorage.setItem('token', response.token)
                setUser(response.user)
            }
        })
    }
    
    const toggleFriendCards = () => {
        if(localStorage.token){
            return <HomePage />
        }
        else {
            return <main className="login-page">
            <header className="banner">
                <h1 className="title">Hey, Remember That Friend?</h1>
            </header>

            <section className="elements-container">
                <div className="auth-buttons">
                    <button className="signup-button" onClick={triggerSignupForm}>
                        Sign Up
                    </button>
                    <button className="login-button" onClick={triggerLoginForm}>
                        Log In
                    </button>
                </div>
                { clickedSignup === true ? showSignupForm() : showLoginForm() }
            </section>
        </main>
        }
    }

    return (
        <>
            {toggleFriendCards()}
        </>
    )
}
