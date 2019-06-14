import React from "react"
import "../../../styles/componenets/Toolbar.css"
 
import Navigationitems from "../Navigationitems/Navigationitems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

import Logo from "../../Logo/Logo"

export default (props)=>{
    return(
        <header className="Toolbar">
           <DrawerToggle drawerToggle={props.drawerToggle}/>
           <Logo className="Logo" height="110%"/>
            <nav className="DesktopOnly">
                <Navigationitems isAuthenticated={props.isAuth}/>
            </nav>
        </header>

        
    )
}