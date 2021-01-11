import {React, useState} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Store from "./components/Store"
import Checkout from "./components/Checkout"

export default function App() {

  const [counter, changeCounter] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
          {/* <Route exact path="/" render={()=>(
            <Home counter={counter} changeCounter={changeCounter} />
          )} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/checkout" component={Checkout} />
        
      </div>
    </BrowserRouter>
  )
}

