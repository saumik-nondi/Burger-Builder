import React,{Component} from "react"
import {connect} from "react-redux"
import Hoc from "../../Hoc/Hoc"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component{

    state={
        showSideDrawer:false
    }
    SideDrawerOpen=()=>{
        this.setState({showSideDrawer:true})
    }
    SideDrawerCancel=()=>{
        this.setState({showSideDrawer:false})
    }

    render(){

        return(
            <Hoc>
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    drawerToggle={this.SideDrawerOpen}/>

                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    show={this.state.showSideDrawer} 
                    clicked={this.SideDrawerCancel}/>
                <main>
                    {this.props.children}
                </main>
          </Hoc>
        ) 
    }
    
}

const mapStateToProps = state=>{
    return{
        isAuthenticated:state.authReducer.token !== null
    }
}

export default connect (mapStateToProps)( Layout);