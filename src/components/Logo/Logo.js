import React from "react"
import Logo from "../../assets/1296410.png"
import "../../styles/componenets/Logo.css"

export default (props )=>{

    return(
        <div className={props.className} style={{height: props.height, width: props.width}} >
            <img src={Logo} alt="MyBurger"></img>
        </div>
    )
} 