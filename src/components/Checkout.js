import {React, useState, useEffect} from "react"
import "./Checkout.css";

export default function Checkout(props){
	const [buttonDisplay, setButtonDisplay] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        let sum = 0;
        console.log('USE EFFECT')
        for (const index in props.items){
            let count = props.items[index].count
            let price = props.items[index].price
            sum += count * price
        }
        setTotal(sum);
    }, []);


    return(
        <div className="checkoutContainer">
        	{   
                props.items.map((item, index)=>{
                	{if (item.count > 0){
                        // just placing it after item.count would cause an infinite loop of
                        // rerendering, thus doing an if here
                		if (buttonDisplay === false){
                            setButtonDisplay(true);
                        }
                	
                	return(
                        <div key={`${index}`} className="item">
                        	<img src={item.image} alt={item.name} className="checkoutImage" ></img>
                        	<div className="itemInfo">
                        		<div style={{textTransform: 'capitalize'}}> {item.name} </div>
                        		<div>Quantity: {item.count}</div>
                        		<div>Price: ${item.price * item.count}</div>
                                {/* {total += item.price * item.count} */}
                                {/* {setButtonDisplay(true)} */}
                        	</div>
                        </div>
                        )
                	}
                	}
                })

            }
            <div style={{display: buttonDisplay ? 'block':'none'}} className="total">Total: ${total}</div>
            <button style={{display: buttonDisplay ? 'block':'none'}}>Proceed to payment</button>
        </div>
    )
}
 