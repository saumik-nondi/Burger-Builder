import * as actionTypes from "../Actions/ActionTypes"
import axios from "../../axios-order"


export const addIngredient = (name)=>{
    console.log(name,"=>Added")
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient=(name)=>{
    
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setIngredients=(ingredients)=>{
  
    return{
      
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients

    }
}

export const fetchIngredientsFailed=()=>{
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients=()=>{
    return dispatch=>{
        axios.get("https://dterd-21d82.firebaseio.com/ingredients.json")
        .then(response=>{
          
                dispatch(setIngredients(response.data))
        }).catch(error=>{
                dispatch(fetchIngredientsFailed())
        })
    };
}