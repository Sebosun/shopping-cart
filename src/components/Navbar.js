import React from "react"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbarContainer">
                <div id="dupa">Seb's Store</div>
                <div className="navbarList"> 
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/store">Store</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
