import { useState, useEffect } from 'react'
import FriendContainer from './FriendContainer'
import LoginPage from './LoginPage'
const baseUrl = 'http://localhost:3000/friends/'

export default function HomePage() {
    const [friends, setFriends] = useState([])
    const [clicked, setClicked] = useState(false)
    const [signUpClicked, setSignUpClicked] = useState(false)
    const [logout, setLogout] = useState(false)

    useEffect(() => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(results => setFriends(results))
    }, []) 

    const switchButtonText = () => {
        setClicked(!clicked)
    }

    const signUpButtonClick = () => {
        setSignUpClicked(!signUpClicked)
    }

    const updateFriend = (editedFriend) => {
        const newFriends = friends.map(friend => {

        return friend.id === editedFriend.id 
            ? editedFriend 
            : friend
        })
        setFriends(newFriends)

        fetch(baseUrl + editedFriend.id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify({ friend: editedFriend })
        })
    }

    const addFriend = (newFriend) => {
        setFriends([ ...friends, newFriend ])

    fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
        })
    }

    const deleteFriend = (oldFriend) => {
        const filteredFriends = friends.filter(friend => friend.id !== oldFriend.id)
        setFriends(filteredFriends)

        fetch(baseUrl + oldFriend.id, { method: 'DELETE' })
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setLogout(true)
    }

    const toggleLogout = () => {
        if(logout === true){
            return <LoginPage />
        } 
        else {
            return  <div className="home-page">
                <header className="side-banner">
                    <h1 className="title">Hey, Remember That Friend?</h1>
                    <button className="create-button" onClick={ switchButtonText }>
                        { clicked === false ? "Add a Friend!" : "Back to Home" }
                    </button>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </header>
                <FriendContainer 
                    friends={ friends } 
                    updateFriend={ updateFriend } 
                    addFriend={ addFriend }
                    deleteFriend={ deleteFriend }
                    setClicked={ setClicked }
                    clicked={ clicked }
                    setSignUpClicked={setSignUpClicked}
                    signUpClicked={signUpClicked}
                />
            </div>
        }
    }

    return (
       <>
        {toggleLogout()}
       </>
    )
}
