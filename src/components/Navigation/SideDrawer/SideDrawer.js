import React from "react"
import Navigationitems from "../Navigationitems/Navigationitems"
import "../../../styles/componenets/SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop"

import Logo from "../../Logo/Logo"
 
export default(props)=>{

    let att=["SideDrawer","Close"]
    if(props.show){
        att=["SideDrawer","Open"]
    }
    return(
        <div>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={att.join(' ')} onClick={props.clicked}>
             <Logo height="25%" className="LogoSide" width="50px"/>
            <nav>
                 <Navigationitems isAuthenticated={props.isAuth}/>
            </nav>
        </div>
        </div>
    )
}   