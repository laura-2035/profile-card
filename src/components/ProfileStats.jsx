import React from 'react'
import './ProfileStats.css'

export default props => {
    return (
        <div className="profile-card-stats">
            <ul className="profile-card-stats-list">
                <li className="profile-card-stats-list-item profile-followers"><p>{props.followers}</p><span>Followers</span></li>
                <li className="profile-card-stats-list-item profile-likes"><p>{props.likes}</p><span>Likes</span></li>
                <li className="profile-card-stats-list-item profile-photos"><p>{props.photos}</p><span>Photos</span></li>
            </ul>
        </div>
    )
}