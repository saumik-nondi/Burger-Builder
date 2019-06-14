import *as actionType from "../Actions/ActionTypes"

const initialState={
    token:null,
    userId:null,
    error:null,
    loading:null,
    authRedirectPath:"/"
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.AUTH_START:
            return{
                ...state,
                error:null,
                loading:true
            }
        case actionType.AUTH_SUCCESS:
            return{
                ...state,
                token:action.token,
                userId:action.userId,
                loading:false
            }
        case actionType.AUTH_FAIL:
            return{
                ...state,
                error:action.error
            }
        case actionType.SET_AUTH_REDIRECT_PATH:
            return{
                ...state,
                authRedirectPath:action.path
            }
        
        case actionType.AUTH_LOGOUT:
                return{
                    ...state,
                    token:null,
                    userId:null
                }
                
        default:
            return state
    }

}
export default reducer