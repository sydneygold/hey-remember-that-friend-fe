import React from 'react'

export default function FriendCard({friend}) {
    return (
        <section className="friend-card">
            <h2 className="name">
                {friend.name}
            </h2>
            <p>
            _______________________________
            </p>
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
