import './App.css';
import {useState, useEffect} from 'react'
import FriendContainer from './components/FriendContainer';
const baseUrl = 'http://localhost:3000/friends/'

function App() {
  const [friends, setFriends] = useState([])

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

  return (
    <main className="App">
      <header className="intro">
        <h1 className="headline">Hey, Remember That Friend?</h1>
        <p>
        Hey remember that friend? That person you really get along with but haven't talked to in five months? Don't you hate losing connection with great people? Here you can make an account and create friend cards with any information you need to remember to be a great friend!
        </p>
      </header>
      <FriendContainer friends={friends} updateFriend={updateFriend} />
    </main>
  );
}

export default App;
