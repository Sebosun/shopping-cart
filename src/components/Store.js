import React from "react"
import "./Store.css"

export default function Store(props){
    return(
        <div className="storeContainer">
            {   
                props.items.map((item, index)=>{
                    console.log(item, index)
                    return(
                        <div key={index} className='product'>
                            <img src={item.image}></img>
                            {/* using text transform to make it capitalized, pretty wierd there's no inbuild js method tbh */}
                            <div style={{textTransform: 'capitalize'}}>{item.name}</div>
                            <div>{item.price}</div>
                            <div>{item.description}</div>
                            {/* TODO: WHEN THE BUTTON IS PRESSED FOWRARD THE OBJECT TO A PROP/FUNCTION,
                                CHECK IF IT EXISTS, AND ADD +1 TO THE CURRENT COUNT
                                THIS WILL LATER BE USED IN THE CHECKOUT */}
                            <button>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
