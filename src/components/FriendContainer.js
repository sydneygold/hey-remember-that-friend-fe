import CreateForm from './CreateForm'
import FriendCard from './FriendCard'
import SignUpForm from './SignUpForm'

export default function FriendContainer({ 
    friends, 
    updateFriend, 
    clicked, 
    setClicked, 
    addFriend, 
    deleteFriend, 
    signUpClicked, 
    setSignUpClicked 
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

    const toggleSignUpForm = () => {
        if(signUpClicked === true){
            return <SignUpForm
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
            { clicked ? toggleCreateForm() : toggleSignUpForm() }
        </section>
    )
}
