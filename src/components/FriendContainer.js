import CreateForm from './CreateForm'
import FriendCard from './FriendCard'

export default function FriendContainer({ 
    friends, 
    updateFriend, 
    clicked, 
    setClicked, 
    addFriend, 
    deleteFriend, 
    }) {

    const toggleCreateForm = () => {
        if(clicked === true){
            return <CreateForm 
                addFriend={ addFriend }
                clicked={ clicked }
                setClicked={ setClicked }
                toggleCreateForm={ toggleCreateForm }
            />
        }
        else {
            return listFriends()
        }
    }


    const listFriends = () => {
        return friends.map(friend => {
            return <FriendCard 
                key={ friend.id }
                friend={ friend }
                updateFriend={ updateFriend }
                deleteFriend={ deleteFriend }
            />
        })
    }

    return (
        <section className="friend-box">
            {toggleCreateForm()}
        </section>
    )
}
