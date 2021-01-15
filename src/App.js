import {React, useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Store from "./components/Store"
import Checkout from "./components/Checkout"

export default function App() {

  const [itemCounter, setItemCounter] = useState(0);
  // ¿¡¿£¡¿£¡
  const [items, setItems] = useState([
    {
      name: 'cat',
      image: 'https://i.imgur.com/Jvh1OQm.jpg',
      price: 25,
      description: 'A very sleepy qute cat',
      count: 0
    },
    {
      name: 'dog',
      image: 'https://i.imgur.com/H37kxPH.jpg' ,
      price: 35,
      description: 'Military dog perfect for your private az9rmy',
      count: 0
    },
    {
      name: 'frog',
      image: 'https://i.imgur.com/vKb4qnU.jpg',
      price: 45,
      description: 'Rare frog species, available for a limited time',
      count: 0
    }
  ]);

  const [cart, setCart] = useState([]);

  let addItems = (item, index) => {
    setItems(prev => {
      let itemIndex = prev.indexOf(item);
      // spread the prev array to a new array
      let newArray = [...prev];
      // using itemIndex, find the prev array and replace count wiht prev.count + 1
      newArray[itemIndex] = {...newArray[itemIndex], count: prev[itemIndex].count + 1};
      console.log(newArray);
      return newArray
    })
  };

  useEffect(() => {
    let itemCount = 0;
    // for (const item in items)
    console.log(`items state changed`)
    for (let i = 0; i < items.length; i++){
        itemCount += items[i].count
        console.log(itemCount)
    }
    setItemCounter(() => itemCount);
  }, [items])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar itemCounter={itemCounter}/>
        {/* apparently i need to return a function for it to run the way i want */}

        <Switch>
          <Route exact path="/">

            <Home />
          </Route>
          <Route path="/store" >
            <Store 
              itemCounter={itemCounter}
              setItemCounter={setItemCounter}
              items={items}
              cart={cart}
              addItems={addItems}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              cart={cart}
              setCart={setCart}
            />

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

