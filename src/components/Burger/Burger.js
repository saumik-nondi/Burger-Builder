import Hoc from "../../Hoc/Hoc"
import React from "react"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import "../../styles/componenets/Burger.css"


export default (props)=>{

    let TransformedIngredient=Object.keys(props.ingredient).map(ky=>{
        return [...Array(props.ingredient[ky])].map((_,id)=>{

            return(<BurgerIngredient  type={ky} key={ky+id}/>)
            }  )
                  }).reduce((arr,current)=>arr.concat(current),[])

                  

    if (TransformedIngredient==0){
        TransformedIngredient=<p className="Primary-msg">Design your dream burger</p>
    }

    return(
        <Hoc className="Hoc">
             <BurgerIngredient type="bread-top"/>  
             {TransformedIngredient}  
             <BurgerIngredient type="bread-bottom"/>
        </Hoc>
    )
}