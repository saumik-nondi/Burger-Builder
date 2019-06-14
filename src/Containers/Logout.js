import React,{Component} from "react"
import *as action from "../store/Actions/index"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

class Logout extends Component {

    componentDidMount(){

        this.props.logout()
        
        
    }
    render(){


        return(
           <Redirect to="/"/>
        )
    }

}

const mapDispatchToProps=dispatch=>{
    return{
        logout:()=>dispatch(action.authLogout())
    }
}

export default connect(null,mapDispatchToProps)(Logout)