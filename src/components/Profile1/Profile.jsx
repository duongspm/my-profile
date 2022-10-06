import React from 'react'
import "./profile.css"
import boy1 from "../../img/duongg1.jpg";
import boy2 from "../../img/duongg2.jpg";
import boy3 from "../../img/duongg3.jpg";
import {BsFacebook,BsInstagram,BsGithub,BsYoutube} from 'react-icons/bs';
import './Profile.jsx'
function Profile() {
    return (
        <div className="profiles">
            <div className='profile'>
                <div className="profile__img">
                    <img src={boy1}></img>
                </div>
                <div className="profile__name">
                    Trần Văn Dương
                </div>
                <div className="profile__title">
                    Font-end Developer
                </div>
                <div className="profile__social">
                    <span className='profile__social__list' href="#"><BsFacebook/></span>
                    <span className='profile__social__list' href="#"><BsInstagram/></span>
                    <span className='profile__social__list' href="#"><BsGithub/></span>
                    <span className='profile__social__list' href="#"><BsYoutube/></span>
                </div>
                <div className="profile__contact">
                    <button>Contact Me</button>
                </div>
            </div>

            <div className='profile'>
                <div className="profile__img">
                    <img src={boy2}></img>
                </div>
                <div className="profile__name">
                    Trần Văn Dương
                </div>
                <div className="profile__title">
                    Font-end Developer
                </div>
                <div className="profile__social">
                    <span className='profile__social__list' href="#"><BsFacebook/></span>
                    <span className='profile__social__list' href="#"><BsInstagram/></span>
                    <span className='profile__social__list' href="#"><BsGithub/></span>
                    <span className='profile__social__list' href="#"><BsYoutube/></span>
                </div>
                <div className="profile__contact">
                    <button>Contact Me</button>
                </div>
            </div>

            <div className='profile'>
                <div className="profile__img">
                    <img src={boy3}></img>
                </div>
                <div className="profile__name">
                    Trần Văn Dương
                </div>
                <div className="profile__title">
                    Font-end Developer
                </div>
                <div className="profile__social">
                    <span className='profile__social__list' href="#"><BsFacebook/></span>
                    <span className='profile__social__list' href="#"><BsInstagram/></span>
                    <span className='profile__social__list' href="#"><BsGithub/></span>
                    <span className='profile__social__list' href="#"><BsYoutube/></span>
                </div>
                <div className="profile__contact">
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
