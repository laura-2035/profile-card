import React from 'react'
import './ProfileInfo.css'
import picture from '../assets/img/picture.jpg'
export default props =>{

    return (
        <div className="profile-card-top">
            <div className="profile-card-info-bg">
            </div>
            <div className="profile-card-picture">
                <img src={picture} alt="Profile picture"></img>
            </div>
            <div className="profile-card-info">
                <h2 className="profile-name">{props.name}</h2>
                <h3 className="profile-age">{props.age}</h3>
                <p className="profile-city">{props.city}</p>
            </div>
        </div>
    )
}