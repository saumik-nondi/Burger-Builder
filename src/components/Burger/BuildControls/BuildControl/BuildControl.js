import React from "react"

import "../../../../styles/componenets/BuildControl.css"

const BuildControl=(props)=>(
    <div className="BuildControl">

            <div className="Label">{props.label}</div>

            <button className="Less" onClick={props.delete}>Less</button>

            <button className="More" onClick={props.added}>More</button>

    </div>
)

export default BuildControl;