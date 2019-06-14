import React,{Component} from "react"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import ContactData from "../Checkout/ContactData/ContactData"
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import "../../styles/componenets/Checkout.css"
import *as action from "../../store/Actions/index"

class Checkout extends Component{

    CancelHandler =()=>{
         this.props.history.goBack();
    }
    ContinueHandler =()=>{
        this.props.history.replace("/checkout/contact-data")
    }
 render(){
     let summary = <Redirect to="/"/>
     if(this.props.ingredient){
         const purchaseRedirect=this.props.purchased?<Redirect to="/"/>:null;
         summary=(
            <div className="Checkout">
                    {purchaseRedirect}
                    <CheckoutSummary 
                        ingredient={this.props.ingredient}
                        CancelHandler={this.CancelHandler}
                        ContinueHandler={this.ContinueHandler}/>
                  
                        <Route
                        path={this.props.match.path + "/contact-data"} 
                        component={ContactData}/>
                
                   
             </div>
         );
     }
     return(
         <div>
            {summary}
         </div>
       
     )
 }
}

const MapStateToProps=state=>{
    return{
        ingredient:state.burgerReducer.ingredients,
        props:state.burgerReducer.totalPrice,
        purchased:state.orderReducer.purchased
    }
}

export default connect(MapStateToProps) (Checkout);