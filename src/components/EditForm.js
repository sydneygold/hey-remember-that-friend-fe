import {useState, useEffect} from 'react'

export default function EditForm({friend, updateFriend, clicked, isClicked, toggleForm}) {
    const [id, setId] = useState(friend.id)
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [zodiac, setZodiac] = useState("")
    const [memos, setMemos] = useState("")

    useEffect(() => {
        const {id, name, birthday, zodiac, memos} = friend
        setId(id)
        setName(name)
        setBirthday(birthday)
        setZodiac(zodiac)
        setMemos(memos)
    }, [])

    const handleSubmit = (event) => {
        const friend = {id, name, birthday, zodiac, memos}
        event.preventDefault()
        updateFriend(friend)
        handleClick()
        toggleForm()
    }

    const handleClick = () => {
        isClicked(false)
    }

    const grabName = (event) => {
        setName(event.target.value)
    }
    
    const grabBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const grabZodiac = (event) => {
        setZodiac(event.target.value)
    }

    const grabMemos = (event) => {
        setMemos(event.target.value)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
                <h2>Edit Me!</h2>
                <label>Name</label>
                <input className="inputs" name={name} value={name} onChange={grabName}/>
                <label>Birthday</label>
                <input className="inputs" name={birthday} value={birthday} onChange={grabBirthday}/>
                <label>Zodiac</label>
                <input className="inputs" name={zodiac} value={zodiac} onChange={grabZodiac}/>
                <label>Memo</label>
                <input className="input-memo" name={memos} value={memos} onChange={grabMemos}/>
                <div className="button-group">
                    <input type="submit" className="submit-button" name="Submit" />
                    <img className="back-button"
                        src="https://i.pinimg.com/originals/a4/d3/87/a4d387c55712f874eeeb4f7b36065ed8.png" 
                        alt="" 
                        onClick={handleClick}
                    />
                </div>
            </form>
    )
}
