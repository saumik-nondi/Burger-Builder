import React,{Component} from "react"
import Hoc from "../../Hoc/Hoc"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../axios-order"
import Spinner from "../../components/UI/Spinner"
import WithErrorHandler from "../../Hoc/WithErrorHandler"
import "../../styles/componenets/BurgerContainer.css"
import {connect} from "react-redux"
import *as  actionTypes from "../../store/Actions/ActionTypes"
import *as burgerBuilderActions from "../../store/Actions/index"







class BurgerContainer extends Component{

    state={
        purchasing:false, 
    }

    componentDidMount(){

        this.props.onInitIngredients();
    }




    

    updatePurchaseState=(ingredient)=>{
       
        const sum=Object.keys(ingredient).map(keys=>{
            return ingredient[keys]
        }).reduce((sum,el)=>{
            return sum+el
        },0);
       return sum > 0;
  }

    purchaseHandler=()=>{

         if(this.props.isAuthenticated){
                 this.setState({purchasing:true})}
       else{
                this.props.onSetAuthRedirectPath("/checkout")
                this.props.history.push("/authentication") }
        
    }

    purchaseCancel=()=>{

        return this.setState({purchasing:false})
     }

     purchaseContinueHandler=()=>{
        
        this.props.onInitPurchase()
        
        this.props.history.push("/checkout")

     }
   

    render(){

       let  burger=this.props.error?<p className="Ab">something is going wrong</p>:<Spinner/>
       
       let orderSummary=null


        if (this.props.ing){
         orderSummary = <OrderSummary 
                                 purchaseCancel={this.purchaseCancel}
                                 purchaseContinue={this.purchaseContinueHandler}
                                 ingredient={this.props.ing}>
                            </OrderSummary>

       

         burger=( 
                <div className="Abc">
                      <Burger
                          ingredient={this.props.ing}>
                      </Burger>

                  <BuildControls
                         ingredientAdded={this.props.onIngredientAdded}
                         ingredientRemove={this.props.onIngredientRemove}
                         purchaseable={this.updatePurchaseState(this.props.ing)}
                         price={this.props.price}
                         isAuthenticated={this.props.isAuthenticated}
                         ordered={this.purchaseHandler} />

                </div>
              
            )
        }
      


        return(

            <Hoc>
               <Modal  show={this.state.purchasing}
                    modalClosed={this.purchaseCancel}> 
                    {orderSummary}
                         
               </Modal>
                    {burger}
            </Hoc>
        )      
    }
}

const MapStateToProps=state=>{
    return{
        ing:state.burgerReducer.ingredients,
        price:state.burgerReducer.totalPrice,
        error:state.burgerReducer.error,
        isAuthenticated:state.authReducer.token !== null
    }
   
}

const MapDispatchToProps=(dispatch)=>{
    return{
        onIngredientAdded: (ingName)=> dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemove: (ingName)=> dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: ()=>dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase:()=>dispatch(burgerBuilderActions.purchaseInit()),
        onSetAuthRedirectPath:(path)=>dispatch(burgerBuilderActions.setAuthRedirectPath(path))

    }
}   

export default connect(MapStateToProps,MapDispatchToProps)( WithErrorHandler(BurgerContainer,axios));