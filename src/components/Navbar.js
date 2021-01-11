import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbarContainer">

                <Link to="/">Seb's store</Link>

                <div className="navbarList"> 
                    <ul>
                        <li>
                            <Link to="/store">Store</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;