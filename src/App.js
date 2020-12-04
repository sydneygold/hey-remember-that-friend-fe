import './App.css';
import { useState, useEffect } from 'react'
import FriendContainer from './components/FriendContainer';
const baseUrl = 'http://localhost:3000/friends/'

function App() {
  const [friends, setFriends] = useState([])
  const [clicked, setClicked] = useState(false)
  const [signUpClicked, setSignUpClicked] = useState(false)

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
      console.log(friend.id, editedFriend.id)
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

  return (
    <main className="App">
      <header className="side-banner">
        <h1 className="title">Hey, Remember That Friend?</h1>
        <div className="signup-and-login-buttons">
          <button className="signup-button" onClick={signUpButtonClick}>
            {signUpClicked === false ? "Sign Up" : "Home"}
          </button>
        </div>
        <p>
        Hey remember that friend? That person you really get along with but haven't talked to in five months? Don't you hate losing connection with great people? Here you can make an account and create friend cards with any information you need to remember to be a great friend!
        </p>
        <button className="create-button" onClick={ switchButtonText }>
          { clicked === false ? "Add a Friend!" : "Back to Home" }
        </button>
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
    </main>
  );
}

export default App;
