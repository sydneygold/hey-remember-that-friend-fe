import React from 'react'
import FriendCard from './FriendCard'

export default function FriendContainer({friends, updateFriend}) {

    const listFriends = () => {
        return friends.map(friend => {
            return <FriendCard 
                key={friend.id}
                friend={friend}
                updateFriend={updateFriend}
            />
        })
    }

    return (
        <section className="friend-box">
            {listFriends()}
        </section>
    )
}
