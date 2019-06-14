import *as actionTypes from "../../store/Actions/ActionTypes"
import axios from "../../axios-order"

export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData
    }
}

export const purchaseBurgerFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error
    }
}

export const purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}
export const  purchaseBurger=(token,orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        console.log(token)
        axios.post("/orders.json?auth=" + token,orderData)
                .then(response=>{ 
                   dispatch(purchaseBurgerSuccess(response.data.name,orderData))
            
            }).catch(error=>
               dispatch(purchaseBurgerFail(error))
                )
    }
}

export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess=order=>{
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        order
    }
}

export const fetchOrdersFail=error=>{
    return{
        type:actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

export const fetchOrdersStart=()=>{
    return{
        type:actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders=( token, userId )=>{
   
    return dispatch=>{
        dispatch(fetchOrdersStart())
        const queryParam ='?auth='+ token + '&orderBy="userId"&equalTo="' + userId + '"'
        axios.get("/orders.json" + queryParam).then(res=>{
            const fetchedOrders=[]
            for(let key in res.data){
                fetchedOrders.push({...res.data[key],id:key})
            }
            dispatch(fetchOrdersSuccess(fetchedOrders))
            
        }).catch(err=>{
            dispatch(fetchOrdersFail(err))
        })
    }
}