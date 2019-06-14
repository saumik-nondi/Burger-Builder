import React,{Component} from "react"
import Input from "../../components/UI/input/Input"
import Button from "../../components/UI/Button/Button"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import *as actions from "../../store/Actions/index"
import "../../styles/componenets/Auth.css"
import Spinner from "../../components/UI/Spinner"


class Auth extends Component{
    state={
        controls:{
    
                        email:{
                            elementType:"input",
                            elementConfig:{
                                type:"email",
                                placeholder:" email"
                            },
                            value:"",
                            validation:{
                                required:true,
                                isEmail:true
                            },
                            valid:false,
                            touched:false
                        },

                        password:{
                            elementType:"input",
                            elementConfig:{
                                type:"password",
                                placeholder:"your password"
                            },
                            value:"",
                            validation:{
                                required:true,
                                minLength:6
                            },
                            valid:false,
                            touched:false
                        },
                 },
                 isSignUp:true
      
    }

    componentDidMount(){
        if(!this.props.buildingBurger && this.props.authRedirectPath !== "/" ){
            this.props.onSetRedirectPatch()
        }
    }
    checkValidity=(value,rules)=>{
        let isValid=true;
        if(rules.required){
            isValid=value.trim()!=="" && isValid;
             }
        if(rules.minLength){
            isValid=value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid=value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    switchAuthModeHandler=()=>{
        this.setState(prevState=>{
            return{
                isSignUp:!prevState.isSignUp
            }
        })
    }

    inputChangedHandler=(event,controlName)=>{

        const updateControls={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }
        };
        this.setState({controls:updateControls})
    }

    
    onSubmitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp    )
    }
   
    render(){
        
        const fromElementsArray=[];
        for(let key in this.state.controls){
            fromElementsArray.push({
                id:key,
                config: this.state.controls[key]
            })
        }

        let form= fromElementsArray.map(formElement=>(
            <Input
            
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            changed={()=>this.inputChangedHandler(event,formElement.id)}
            >
               
            </Input>)

        )
        
        if (this.props.loading){
            form=<Spinner/>
        }
        let errorMessage=null

        if(this.props.error){
            errorMessage=(
                <p>{this.props.error.message}</p>
            )
        }

        let authRedirect=null

        if(this.props.isAuthenticated){
            authRedirect=<Redirect to={this.props.authRedirectPath}/>
        }



        return(
            <div className="Auth">
            {authRedirect}
            {errorMessage}
                <form onSubmit={this.onSubmitHandler}>
                      {form}
                      <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button 
                      clicked={this.switchAuthModeHandler}
                      btnType="Danger">SWITCH TO {this.state.isSignUp?"SIGNIN":"SIGNUP"}
                </Button>
            </div>
         )
    }
    
}
const mapPropsToState=state=>{
    return{
        loading:state.authReducer.loading,
        error:state.authReducer.error,
        isAuthenticated:state.authReducer.token !== null,
        buildingBurger:state.burgerReducer.building,
        authRedirectPath:state.authReducer.authRedirectPath
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(email,password,isSignUp)=>dispatch(actions.auth(email,password,isSignUp)),
        onSetRedirectPatch:()=>dispatch(actions.setAuthRedirectPath("/"))
    }
}

export default connect(mapPropsToState,mapDispatchToProps)( Auth);