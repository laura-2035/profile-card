import React from 'react'
import './ProfileInfo.css'
import ProfilePicture from './ProfilePicture'
import picture from '../assets/img/picture.jpg'
export default props =>{

    return (
        <div className="profile-card-top">
            <div className="profile-card-info-bg"></div>
            <ProfilePicture imgsrc={picture} alt={props.name} />
            <div className="profile-card-info">
                <h2 className="profile-name">{props.name}</h2>
                <h3 className="profile-age">{props.age}</h3>
                <p className="profile-city">{props.city}</p>
            </div>
        </div>
    )
}