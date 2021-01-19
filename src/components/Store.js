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
                            <div className="productInfo">
                                <div className="description">{item.description}</div>
                                <div className="price">Price: ${item.price}</div>
                            
                                <div className="name" style={{textTransform: 'capitalize'}}>{item.name}</div>
                            
                            {/* <button onClick={() => props.addItems(item, index)}>Add to cart</button> */}
                                <div className="form">
                                <form  onSubmit={(e) => {props.addItems(e, index)}}>
                                    <input
                                        placeholder={"1"}
                                        value={item.tempCount}
                                        onChange={(e) => 
                                            props.changeTempQuantity(e, index)
                                            }
                                        type={'number'}
                                        min={1}
                                        max={100}
                                    />
                                    <button className="button">Submit</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
