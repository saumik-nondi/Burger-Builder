import React from "react"
import "../../styles/componenets/Order.css"
import {connect} from "react-redux"

export default(props)=>{
    const ingredients=[]

    for (let ingredientName in props.ingredient){
        ingredients.push({
            name:ingredientName,
            amount:props.ingredient[ingredientName]
        })
    }

    const ingredientOutput=ingredients.map(ig=>{
        return <span key={ig.name}>{ig.name}  ({ig.amount})</span>
    })
    return(
     
        <div className="Order">

            <p>Ingredietns: {ingredientOutput} </p>
            <p>Price <strong>{props.price}</strong></p>
    
        </div>      
    )   
   
}

