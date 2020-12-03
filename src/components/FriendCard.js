import {useState} from 'react'
import EditForm from './EditForm'

export default function FriendCard({friend, updateFriend, deleteFriend}) {

    const [hovered, isHovered] = useState(false)
    const [deleteHover, setDeleteHover] = useState(false)
    const [clicked, isClicked] = useState(false)

    const handleMouseEnter = (event) => {
        isHovered(true)
    }
    
    const handleMouseLeave = (event) => {
        isHovered(false)
    }

    const editMeNotification = () => {
        return hovered === true
        ? <p className="edit-notification">Edit me!</p>
        : null
    }

    const toggleClick = (event) => {
        isClicked(!clicked)
    }

    const deleteMessageIn = (event) => {
        setDeleteHover(true)
    }
    const deleteMessageOut = (event) => {
        setDeleteHover(false)
    }

    const deleteMeNotification = () => {
        return deleteHover === true
        ? <p className="edit-notification">Delete me!</p>
        : null
    }
    
    const handleDelete = (event) => {
        deleteFriend(friend)
    }

    const toggleForm = (event) => {
        if(clicked === true){
            return <EditForm 
                friend={friend} 
                updateFriend={updateFriend}
                handleClick={toggleClick}
                clicked={clicked}
                isClicked={isClicked}
                toggleForm={toggleForm}
            />
        }
        else {
            return (
                <section className="friend-card">
                    <div className="header">
                        <h2 className="name">
                            {friend.name}
                        </h2>
                        {editMeNotification()}
                        <img 
                        className="edit-button" 
                        src="http://pngimg.com/uploads/star/star_PNG41462.png" alt="star"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleClick}
                    />
                    
                    </div>
                    <div className="design-line"/>
                    <p>
                        <span className="bold-this">
                            Birthday  -
                        </span>
                        {friend.birthday}
                    </p>
                    <p>
                        <span className="bold-this">
                            Zodiac  -
                        </span>
                        {friend.zodiac}
                    </p>
                    <p>
                        <span className="bold-this">
                            Life goings  -
                        </span>
                        <br/>
                        {friend.memos}
                    </p>
                    <div className="delete">
                        <img src="https://www.onlygfx.com/wp-content/uploads/2018/10/6-watercolor-x-brush-stroke-4.png"
                            alt="blue x"
                            className="delete-button"
                            onMouseEnter={deleteMessageIn}
                            onMouseLeave={deleteMessageOut}
                            onClick={handleDelete}
                        />
                        {deleteMeNotification()}
                    </div>
                </section>
            )
        }
    }
    
    
    return (
        <div>
            {toggleForm()}
        </div>
    )
}
