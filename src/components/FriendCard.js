import { useState } from 'react'
import EditForm from './EditForm'

export default function FriendCard({ friend, updateFriend, deleteFriend }) {

    const [editHovered, setEditHovered] = useState(false)
    const [deleteHovered, setDeleteHovered] = useState(false)
    const [clicked, isClicked] = useState(false)

    const toggleClick = (event) => {
        isClicked(!clicked)
    }

    const handleEditMouseEnter = (event) => {
        setEditHovered(true)
    }
    
    const handleEditMouseLeave = (event) => {
        setEditHovered(false)
    }

    const editMeNotification = () => {
        return editHovered === true
        ? <p>Edit me!</p>
        : null
    }

    const deleteMessageIn = (event) => {
        setDeleteHovered(true)
    }
    const deleteMessageOut = (event) => {
        setDeleteHovered(false)
    }

    const deleteMeNotification = () => {
        return deleteHovered === true
        ? <p>Delete me!</p>
        : null
    }
    
    const handleDelete = (event) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this?")
        if (isConfirmed) { deleteFriend(friend) }
    }

    const toggleForm = (event) => {
        if(clicked === true){
            return <EditForm 
                friend={ friend } 
                updateFriend={ updateFriend }
                handleClick={ toggleClick }
                clicked={ clicked }
                isClicked={ isClicked }
                toggleForm={ toggleForm }
            />
        }
        else {
            return (
                <section className="friend-card">
                    <div className="friend-card-header">
                        <h2 className="name">
                            { friend.name }
                        </h2>
                        { editMeNotification() }
                        <img 
                        className="edit-button" 
                        src="http://pngimg.com/uploads/star/star_PNG41462.png" 
                        alt="star"
                        onMouseEnter={ handleEditMouseEnter }
                        onMouseLeave={ handleEditMouseLeave }
                        onClick={ toggleClick }
                    />
                    
                    </div>
                    <div className="design-line"/>
                    <p>
                        <span className="bold-this">
                            Birthday  -
                        </span>
                        { friend.birthday }
                    </p>
                    <p>
                        <span className="bold-this">
                            Zodiac  -
                        </span>
                        { friend.zodiac }
                    </p>
                    <p>
                        <span className="bold-this">
                            Life goings  -
                        </span>
                        <br/>
                        { friend.memos }
                    </p>
                    <div className="delete-input">
                        <img src="https://www.onlygfx.com/wp-content/uploads/2018/10/6-watercolor-x-brush-stroke-4.png"
                            alt="blue x"
                            className="delete-button"
                            onMouseEnter={ deleteMessageIn }
                            onMouseLeave={ deleteMessageOut }
                            onClick={ handleDelete }
                        />
                        { deleteMeNotification() }
                    </div>
                </section>
            )
        }
    }
    
    
    return (
        <div>
            { toggleForm() }
        </div>
    )
}
