import React from "react"
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"
import "../../../styles/componenets/CheckoutSummary.css"


export default (props)=>{
        return(
            <div className="CheckoutSummary">

                <h1>Hope it tastes well</h1>

                <div  style={{width:"100%",margin:'auto'}}>
                    <Burger ingredient={props.ingredient}/>
                </div>
                
                <Button btnType="Danger" clicked={props.CancelHandler}><b>CANCEL</b></Button>

                <Button btnType="Success" clicked={props.ContinueHandler}><b>CONTINUE</b></Button>
            </div>
        )

}