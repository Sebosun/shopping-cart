import {React, useState} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Store from "./components/Store"
import Checkout from "./components/Checkout"

export default function App() {

  const [itemCounter, setItemCounter] = useState(0);
  const [items, changeItems] = useState([
    {
      name: 'cat',
      image: 'https://i.imgur.com/Jvh1OQm.jpg',
      price: 25,
      description: 'A very sleepy qute cat'
    },
    {
      name: 'dog',
      image: 'https://i.imgur.com/H37kxPH.jpg' ,
      price: 35,
      description: 'Military dog perfect for your private army'
    },
    {
      name: 'frog',
      image: 'https://i.imgur.com/vKb4qnU.jpg',
      price: 45,
      description: 'rare frog species, available for a limited time'
    },

  ]);


  

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
              items={items}
            />
          </Route>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

