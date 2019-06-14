import React,{Component} from "react"
import Button from "../../../components/UI/Button/Button"
import "../../../styles/componenets/ContactData.css"
import axios from '../../../axios-order'
import Spinner from "../../../components/UI/Spinner"
import Input from "../../../components/UI/input/Input"
import {connect} from "react-redux"
import withErrorHandler from "../../../Hoc/WithErrorHandler"
import *as actions from "../../../store/Actions/index"



class ContactData extends Component{
    state={
       orderForm:{
           name:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"your name"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
            street:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"street"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            postalCode:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"postal code"
                },
                value:"",
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                valid:false,
                touched:false

            },
            country:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"country"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:"input",
                elementConfig:{
                    type:"email",
                    placeholder:"E-mail"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod:{
                elementType:"select",
                elementConfig:{
                   options:[
                       {value: 'fastest' , displayValue:'Fastest'},
                       {value: 'cheapest' , displayValue: 'Cheapest'}
                   ]
                },
                value:"fastest",
                validation:{},
                valid:true
            }

       },
            
           formIsValid:false,
           loading:false

    }
   
   
    OrderHandler=(event)=>{
        event.preventDefault();
        const formData={};
         for(let data in this.state.orderForm){
             formData[data]=this.state.orderForm[data].value
         }

        
        const orders={
                ingredient:this.props.ingredient,
                price:this.props.price,
                orderData:formData,
                userId:this.props.userId
                
        }

        this.props.onOrderBurger(this.props.token,orders)
        
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

    inputChangedHandler=(event,formElement)=>{
        event.preventDefault();
        
        const updatedOrderForm={...this.state.orderForm};
        const updatedFormElement={...updatedOrderForm[formElement]};
        updatedFormElement.value=event.target.value;

        updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched=true;

        let formIsValid=true

        for(let identifier in  updatedOrderForm){
            formIsValid=updatedOrderForm[identifier].valid && formIsValid
        }

        updatedOrderForm[formElement]=updatedFormElement;
        this.setState({orderForm:updatedOrderForm, formIsValid})
    }

    render(){

        const fromElementsArray=[];
        for(let key in this.state.orderForm){
            fromElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form=(
            <form onSubmit={this.OrderHandler}>
                   {fromElementsArray.map((formElement)=>(
                       <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                            shouldValidate={formElement.config.validation}
                            changed={()=>this.inputChangedHandler(event,formElement.id)}
                            ></Input>
                   ))}
                    <Button btnType="Success" disabled={!this.state.formIsValid}><b>ORDER</b></Button>
                </form>
        )
        if(this.props.loading){
            form=<Spinner/>
        }   
        return(

            <div className="ContactData">
                 
                <h1>Please enter your precise address for better service</h1>
                {form}
                
            
            </div>
        )
    }
}

const MapStateToProps=state=>{
    return {
        ingredient:state.burgerReducer.ingredient,
        price:state.burgerReducer.totalPrice,
        loading:state.orderReducer.loading,
        token:state.authReducer.token,
        userId:state.authReducer.userId
    }
}
const MapDispatchToProps =(dispatch)=>{
    return{
        onOrderBurger:(token,orderData)=>dispatch(actions.purchaseBurger(token,orderData))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(withErrorHandler(ContactData,axios));