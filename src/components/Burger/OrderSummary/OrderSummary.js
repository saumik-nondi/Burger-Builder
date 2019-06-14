import React,{Component} from "react"
import Button from "../../UI/Button/Button"

class OrderSummary extends Component {
    
    render(){

        const ingredientSummary=Object.keys(this.props.ingredient).map((key)=>{
            return <li key={key}>{key} {this.props.ingredient[key]}</li>
        })
    

        return(
            <div>
                <span>Quantity</span>
                <ul>{ingredientSummary}</ul>
                <p>continue to checkout?</p>
                <Button 
                    btnType="Danger" 
                    clicked={this.props.purchaseCancel}>
                   <b> CANCEL</b>
                </Button>
                <Button
                     btnType="Success" 
                     clicked={this.props.purchaseContinue}>
                     <b>CONTINUE</b>
                </Button>       
            </div>
        )

    }
    
    
} 

export default OrderSummary;