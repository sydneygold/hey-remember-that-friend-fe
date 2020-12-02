import './App.css';
import {useState, useEffect} from 'react'
import FriendContainer from './components/FriendContainer';
const baseUrl = 'http://localhost:3000/friends'

function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(results => setFriends(results))
  }, []) 

  return (
    <main className="App">
      <h1 className="headline">Hey, Remember That Friend?</h1>
      <FriendContainer friends={friends} />
    </main>
  );
}

export default App;
