import React,{Component} from "react"   
import Layout from "./components/Layout/Layout"
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import asyncComponent from "../src/Hoc/AsyncComponent"
import BurgerContainer from "./Containers/BurgerContainer/BurgerContainer"
import Logout from "../src/Containers/Logout"
import *as action from "../src/store/Actions/index"

const asyncCheckout= asyncComponent(()=>{
    return import("../src/Containers/Checkout/Checkout")
})

const asyncAuth= asyncComponent(()=>{
    return import("../src/Containers/Auth/Auth")
})

const asyncOrders= asyncComponent(()=>{
    return import("../src/Containers/Orders/Orders")
})



class Ap extends Component{

    componentDidMount(){
        this.props.onTryAutoSignup()
    }

    render(){

        let route=(
            <Switch>
                <Route path="/" exact  component={BurgerContainer}/>
                <Route path="/authentication" component={asyncAuth}/>
                <Redirect to="/"/>
            </Switch>
          
        )
        if(this.props.isAuthenticated){
            route=(
                <div className="ap">
                
                     <Switch>  

                                <Route path="/checkout" component={asyncCheckout}/> 
                                <Route path="/authentication" component={asyncAuth}/>
                                <Route path="/orders" component={asyncOrders}/>  
                                <Route path="/logout" component={Logout}/>
                                <Route path="/" exact  component={BurgerContainer}/>         
                                <Redirect to="/"/>          
                     </Switch> 


                </div>
            
            )
        }

        return(

            <Layout>
            
                {route}
               
            </Layout>
        )
    }
     
}

const mapStateToProps=state=>{
    return{
        isAuthenticated:state.authReducer.token !== null
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onTryAutoSignup:()=>dispatch(action.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Ap))

