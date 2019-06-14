import React from "react"
import "../../../styles/componenets/Backdrop.css"




export default (props)=>(
   props.show?<div className="Backdrop" onClick={props.clicked}> </div>:null
)