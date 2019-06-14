
import React from "react"
import ReactDOM from "react-dom";
import Ap  from "./Ap"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {createStore, applyMiddleware,compose,combineReducers} from "redux"
import burgerReducer from "./store/Reducers/BurgerBuilderReducer"
import orderReducer from "./store/Reducers/OrderReducer"
import thunk from "redux-thunk"
import authReducer from "../src/store/Reducers/AuthReducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    burgerReducer,
    orderReducer,
    authReducer
}
)

const store=createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
const app=(

    <Provider store={store}>
       <BrowserRouter>
             <Ap/>
       </BrowserRouter>
    </Provider>
   
)


ReactDOM.render(app,document.getElementById("app"))






