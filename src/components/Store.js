import React from "react"
import "./Store.css"

export default function Store(props){



    return(
        <div className="storeContainer">
            {   
                props.items.map((item, index)=>{
                    return(
                        <div key={index} className='product'>
                            <img src={item.image} alt={`${item.name}`}></img>
                            {/* using text transform to make it capitalized, pretty wierd there's no inbuild js method tbh */}
                            <div>{item.description}</div>
                            <div style={{textTransform: 'capitalize'}}>{item.name}</div>

                            <div>${item.price}</div>
                            
                            <button onClick={() => props.addItems(item, index)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
