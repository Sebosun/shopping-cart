import React from "react"
import "./Checkout.css";

export default function Checkout(props){
	let buttonDisplay = false;
    return(
        <div class="checkoutContainer">
        	{   
                props.items.map((item, index)=>{
                	{if (item.count > 0){
                		buttonDisplay = true;
                	
                	return(
                        <div key={`${index}`} className="item">
                        	<img src={item.image} alt={item.name} className="checkoutImage" ></img>
                        	<div className="itemInfo">
                        		<div style={{textTransform: 'capitalize'}}> {item.name} </div>
                        		<div>Quantity: {item.count}</div>
                        		<div>Price: ${item.price * item.count}</div>
                        	</div>
                        </div>
                        )
                	}
                	}
                })

            }
            <button style={{display: buttonDisplay ? 'block':'none'}}>Proceed to payment</button>
        </div>
    )
}
 