import React from 'react'
import './ProfilePicture.css'

export default props => {
    return (
        <div className="profile-picture-container">
            <img className="profile-picture" src={props.imgsrc} alt={props.alt}></img>
        </div>
    )
}