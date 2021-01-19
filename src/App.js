import {React, useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Store from "./components/Store"
import Checkout from "./components/Checkout"

export default function App() {

  const [itemCounter, setItemCounter] = useState(0);

  const [quantity, setQuantity] = useState(0);

  const [items, setItems] = useState([
    {
      name: 'cat',
      image: 'https://i.imgur.com/Jvh1OQm.jpg',
      price: 25,
      description: 'A very sleepy qute cat',
      count: 0,
      tempCount: 1,
    },
    {
      name: 'dog',
      image: 'https://i.imgur.com/H37kxPH.jpg' ,
      price: 35,
      description: 'Military dog perfect for your private army',
      count: 0,
      tempCount: 1,
    },
    {
      name: 'frog',
      image: 'https://i.imgur.com/vKb4qnU.jpg',
      price: 45,
      description: 'Rare frog species',
      count: 0,
      tempCount: 1,
    }
  ]);

  // monitors when items are changed, and adjusts the itemCounter accordingly
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

  // let addItems = (item, index) => {
  //   setItems(prev => {
  //     let itemIndex = prev.indexOf(item);
  //     // spread the prev array to a new array
  //     let newArray = [...prev];
  //     // using itemIndex, find the prev array and replace count wiht prev.count + 1
  //     newArray[itemIndex] = {...newArray[itemIndex], count: prev[itemIndex].count + 1};
  //     console.log(newArray);
  //     return newArray
  //   })
  // };

  // changes items quantity after 'submit' button is pressed, which makes cart appear in checkout
  let addItems = (event, index) => {
    event.preventDefault();
    setItems((prev) => {
      let newArray = [...prev];
      newArray[index] = {...newArray[index], count: prev[index].count + newArray[index].tempCount};
      newArray[index] = {...newArray[index], tempCount: 1};
      return newArray;
    });
  };

  // changes changeTemp quantity in 'items' state, afterwards it'll be used to change quantity for good
  let changeTempQuantity = (event, index) => {
    event.preventDefault();
    // gets the value data from event.target and sets it to variable 'value'
    const {value} = event.target
    setItems((prev) => {
      let newArray = [...prev];
      // the value saved is text, fixing it to be an int here to prevent further issues
      newArray[index] = {...newArray[index], tempCount: parseInt(value)};
      return newArray;
    })
    console.log(items)
  }
  

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
              items={items}
              addItems={addItems}
              quantity={quantity}
              setQuantity={setQuantity}
              changeTempQuantity={changeTempQuantity}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              items={items}
            />

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

