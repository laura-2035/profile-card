import React from 'react'
import './ProfileCard.css'
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'
import ProfilePicture from './ProfilePicture'
import Picture from '../assets/img/picture.jpg'

export default () =>{

    return (
        <div className="profile-card-wrapper">
            <ProfileInfo name="Victor Crest" age="26" city="London"/>
            <ProfilePicture imgsrc={Picture} alt="Victor Crest" />
            <ProfileStats followers="80K" likes="803K" photos="1.4K" />
        </div>
    )
}