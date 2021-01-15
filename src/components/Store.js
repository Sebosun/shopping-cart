import React from "react"
import "./Store.css"

export default function Store(props){



    return(
        <div className="storeContainer">
            {   
                props.items.map((item, index)=>{
                    return(
                        <div key={index} className='product'>
                            <img src={item.image} alt={`Image of an ${item.name}`}></img>
                            {/* using text transform to make it capitalized, pretty wierd there's no inbuild js method tbh */}
                            <div>{item.description}</div>
                            <div style={{textTransform: 'capitalize'}}>{item.name}</div>

                            <div>${item.price}</div>
                            
                            {/* TODO: WHEN THE BUTTON IS PRESSED FOWRARD THE OBJECT TO A PROP/FUNCTION,
                                CHECK IF IT EXISTS, AND ADD +1 TO THE CURRENT COUNT
                                THIS WILL LATER BE USED IN THE CHECKOUT */}
                            <button onClick={() => props.addItems(item, index)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
