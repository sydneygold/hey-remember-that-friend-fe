import {useState} from 'react'
import EditForm from './EditForm'

export default function FriendCard({friend, updateFriend}) {

    const [hovered, isHovered] = useState(false)
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

    const toggleForm = (event) => {
        if(clicked === true){
            return <EditForm 
                friend={friend} 
                updateFriend={updateFriend}
                handleClick={toggleClick}
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
