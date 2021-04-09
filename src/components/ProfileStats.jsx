import React from 'react'
import './ProfileStats.css'

export default props => {
    return (
        <div className="profile-card-stats">
            <ul className="profile-card-stats-list">
                <li>{props.followers}</li>
                <li>{props.likes}</li>
                <li>{props.photos}</li>
            </ul>
        </div>
    )
}