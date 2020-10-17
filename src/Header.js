import React from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            {/* <h1>I am a header</h1> */}
            <div className="header__left">
                <MenuSharpIcon/>
                <img 
                    className="header__logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV4HT-Y3IMYm3Y_VOA_JEMfcxe5GHF4wuP7w&usqp=CAU" 
                    alt=""
                />
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchSharpIcon className="header__inputButton"/>
            </div>

            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon"/>
                <AppsSharpIcon className="header__icon"/>
                <NotificationsActiveSharpIcon className="header__icon"/>
                <Avatar
                    alt="Yi Zhao"
                    src="https://i.insider.com/5df126b679d7570ad2044f3e?width=1100&format=jpeg&auto=webp" 
                />
            </div>
        </div>
    )
}

export default Header
