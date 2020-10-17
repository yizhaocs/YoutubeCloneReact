import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} Title="Home"/>
            <SidebarRow Icon={WhatshotIcon} Title="Treading"/>
            <SidebarRow Icon={SubscriptionsIcon} Title="Subscription"/>
        </div>
    )
}

export default Sidebar
