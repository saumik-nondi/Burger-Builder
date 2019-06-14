import *as actions from "../Actions/ActionTypes"
import axios from "axios"

export const authStart=()=>{
    return{
        type:actions.AUTH_START
    }
}

export const authSuccess=(token,userId)=>{
    return{
        type:actions.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail=(error)=>{
    return{
        type:actions.AUTH_FAIL,
        error
    }
}

export const authLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    return{
        type:actions.AUTH_LOGOUT
    }
}

export const checkTimeOut=expirationTime=>{
    return dispatch=>{

        setTimeout(()=>{
            dispatch(authLogout())
        },expirationTime * 1000)
    }
}

export const auth=(email,password,isSignUp)=>{
    return dispatch=>{
        const authData={
            email,
            password,
            returnSecureToken:true
        }
        let url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDhR29jKHTCVI0mXC8yGO-qghf2BJoqBm0"
        if(!isSignUp){
            url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDhR29jKHTCVI0mXC8yGO-qghf2BJoqBm0"
        }
       axios.post(url,authData).then(response=>{
            
           const expirationDate= new Date(new Date().getTime() + response.data.expiresIn * 1000)
           localStorage.setItem("token",response.data.idToken)
           localStorage.setItem("expirationDate", expirationDate)
           localStorage.setItem("userId",response.data.localId)
           dispatch(authSuccess(response.data.idToken,response.data.localId))
           dispatch(checkTimeOut(response.data.expiresIn))
       }).catch(error=>{(
           dispatch(authFail(error.response.data.error)))
       })
    }
}

export const setAuthRedirectPath=(path)=>{
    return{
        type:actions.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem("token")
        if(!token){
            dispatch(authLogout())
        }else{
            const expirationDate=new Date(localStorage.getItem("expirationDate"))
            if(expirationDate <= new Date()){
                dispatch(authLogout())
            }else{
                const userId=localStorage.getItem("userId")
                dispatch(authSuccess(token,userId))
                dispatch(checkTimeOut((expirationDate.getTime()-new Date().getTime())/1000))
            }

        }
    }
}