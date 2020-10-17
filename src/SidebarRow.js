import React from 'react'
import './SidebarRow.css'


function SidebarRow({Icon, Title}) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{Title}</h2>
        </div>
    )
}

export default SidebarRow
