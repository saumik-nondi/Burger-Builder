import React from "react"
import "../../../styles/componenets/Button.css"
export default (props)=>(
    <button className={["Button",[props.btnType]].join(' ')} onClick={props.clicked} disabled={props.disabled}>{props.children}</button>
)