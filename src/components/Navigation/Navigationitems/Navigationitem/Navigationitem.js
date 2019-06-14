import React from "react"
import {NavLink} from "react-router-dom"
import "../../../../styles/componenets/Navigationitem.css"

export default (props)=>(
    
        <li className="Navigationitem">
        <NavLink
        to={props.link}
        activeClassName="active"
        exact={props.exact}
       >
        {props.children}</NavLink>
        </li>

)
