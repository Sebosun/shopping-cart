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
                            <button>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
