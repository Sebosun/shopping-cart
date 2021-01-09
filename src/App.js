import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
}

