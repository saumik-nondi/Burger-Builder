import React from "react"
import "../../../styles/componenets/Navigationitems.css"
import Navigationitem from "../Navigationitems/Navigationitem/Navigationitem"

export default (props)=>(
    <ul className="Navigationitems">
       <Navigationitem link="/" exact><strong>Burger Builder</strong> </Navigationitem>
       {props.isAuthenticated? <Navigationitem link="/orders"><strong>Orders</strong> </Navigationitem>:null}
       
       {!props.isAuthenticated?
        <Navigationitem link="/authentication" ><strong>Authentication</strong></Navigationitem>:
        <Navigationitem link="/logout" ><strong>Logout</strong></Navigationitem>}
    </ul>
)
