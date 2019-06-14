import * as actionTypes from "../Actions/ActionTypes"

const initialState={
    ingredients:null,
    totalPrice:10,
    error:false,
    building:false
}

const INGREDIENT_PRICES={
    salad:10,
    meat:20,
    bacon:30,
    cheese:40
}

export default(state=initialState,action)=>{

    switch(action.type){

        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName]+1
                },
                totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building:true

            };
        
        case actionTypes.SET_INGREDIENTS:{
            return{
                ...state,
                ingredients:{
                    salad:action.ingredients.salad,
                    bacon:action.ingredients.bacon,
                    cheese:action.ingredients.cheese,
                    meat:action.ingredients.meat

                },
                totalPrice:10,
                error:false,
                building:false
            } 
        }
        case actionTypes.REMOVE_INGREDIENT:
            let remove=0
            let price=state.totalPrice
            if(state.ingredients[action.ingredientName]!=0){
                console.log(action.ingredientName,"=>Removed")
                remove=state.ingredients[action.ingredientName]-1
                price=state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:remove
            },
            totalPrice:price,
            building:true

        };

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            }
        default:
            return state
    }

}