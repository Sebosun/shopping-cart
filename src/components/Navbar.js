import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar(props){
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
                            <Link to="/checkout">{`Checkout (${props.itemCounter})`}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;