import React,{Component} from "react"
import {connect} from "react-redux"
import Order from "../../components/Order/Order"
import axios from "../../axios-order"
import withErrorHandler from "../../Hoc/WithErrorHandler"
import *as action from "../../store/Actions/index"

class Orders extends Component{

    
    componentDidMount(){
      this.props.onFetchOrders(this.props.token,this.props.userId)
    }
    render(){
        return(
            <div>
                {this.props.orde.map(order=>( <Order 
                    key={order.id}
                    ingredient={order.ingredient}
                    price={order.price}
                 />) )}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        orde:state.orderReducer.order,
        token:state.authReducer.token,
        userId:state.authReducer.userId
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchOrders:(token,userId)=>dispatch(action.fetchOrders(token,userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));