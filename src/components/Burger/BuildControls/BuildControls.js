import React from "react"
import BuildControl from "./BuildControl/BuildControl.js"
import "../../../styles/componenets/BuildControls.css"

const control=[
    {label:"salad", type:"salad"},
    {label:"meat", type:"meat"},
    {label:"bacon", type:"bacon"},
    {label:"cheese", type:"cheese"}
]

const   BuildControls=(props)=>(
   

    <div>
  
         <p className="Price"><b>Burger price :{props.price}</b></p>
         {control.map((item)=>{
            return(
                <div key={item.label} className="BuildControls">
              
                <BuildControl


                    label={item.label}
                    added={()=>props.ingredientAdded(item.type)}
                    delete={()=>props.ingredientRemove(item.type)}
                />
                
                </div>

            )
        })}
        <div className="a">
        <button className="orderButton" 
        
        disabled={!props.purchaseable}
        onClick={props.ordered}>
        <strong>{props.isAuthenticated?"Checkout":"SIGN UP TO ORDER"}</strong></button>
        </div>

    </div>
)
export default BuildControls;