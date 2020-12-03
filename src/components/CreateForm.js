import {useState} from 'react'

export default function CreateForm({addFriend, setClicked, toggleCreateForm}) {

    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [zodiac, setZodiac] = useState("")
    const [memos, setMemos] = useState("")

    const handleSubmit = (event) => {
        const friend = {name, birthday, zodiac, memos}
        event.preventDefault()
        addFriend(friend)
        handleClick()
        toggleCreateForm()
    }

    const addName = (event) => {
        setName(event.target.value)
    }
    
    const addBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const addZodiac = (event) => {
        setZodiac(event.target.value)
    }

    const addMemo = (event) => {
        setMemos(event.target.value)
    }

    const handleClick = () => {
        setClicked(false)
    }

    return (
        <section className="create-form-container">
        <form className="create-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add a Friend!</h2>
                <label>Name:</label>
                <input name={name} value={name} onChange={addName}/>
                <label>Birthday:</label>
                <input name={birthday} value={birthday} onChange={addBirthday}/>
                <label>Zodiac:</label>
                <input  name={zodiac} value={zodiac} onChange={addZodiac}/>
                <label>Memos:</label>
                <input  className="memo" name={memos} value={memos} onChange={addMemo}/>
                <input type="submit" className="submit" name="Submit"/>
            </form>
        </section>
    )
}
