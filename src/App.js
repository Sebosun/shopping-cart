import {React, useState} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Store from "./components/Store"
import Checkout from "./components/Checkout"

export default function App() {

  const [itemCounter, setItemCounter] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar itemCounter={itemCounter}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/store" >
            <Store 
              itemCounter={itemCounter}
              setItemCounter={setItemCounter}
            />
          </Route>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

