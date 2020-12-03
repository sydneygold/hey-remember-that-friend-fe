import './App.css';
import {useState, useEffect} from 'react'
import FriendContainer from './components/FriendContainer';
import CreateForm from './components/CreateForm';
const baseUrl = 'http://localhost:3000/friends/'

function App() {
  const [friends, setFriends] = useState([])
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(results => setFriends(results))
  }, []) 

  const updateFriend = (editedFriend) => {
    friends.map(friend => {
      return friend.id === editedFriend.id 
        ? editedFriend 
        : friend
    })
    setFriends(friends)

      fetch(baseUrl + editedFriend.id, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify({friend: editedFriend})
      })
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend])

    fetch(baseUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(newFriend)
    })
  }

  const deleteFriend = (oldFriend) => {
    let filteredFriends = friends.filter(friend => friend.id !== oldFriend.id)
    setFriends(filteredFriends)
    
    fetch(baseUrl + oldFriend.id, {method: 'DELETE'})
  }

  return (
    <main className="App">
      <header className="intro">
        <h1 className="headline">Hey, Remember That Friend?</h1>
        <p>
        Hey remember that friend? That person you really get along with but haven't talked to in five months? Don't you hate losing connection with great people? Here you can make an account and create friend cards with any information you need to remember to be a great friend!
        </p>
        <button className="create-button" onClick={handleClick}>
          {clicked === false ? "Add a Friend!" : "Back to Home"}
        </button>
      </header>
      <FriendContainer 
        friends={friends} 
        updateFriend={updateFriend} 
        clicked={clicked}
        setClicked={setClicked}
        addFriend={addFriend}
        deleteFriend={deleteFriend}
      />
    </main>
  );
}

export default App;
