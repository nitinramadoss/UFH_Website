import './App.css';
import React, { Component, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() { 
  const [offsetY, setOffsetY]= React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  // style={ {transform: `translateY(${offsetY*0.5}px)`}}

  return (
    <div className="App">
      <div className = "home">
      {/* <Navbar className = "nav" sticky="top">
        <Navbar.Brand>UF Hackathoners</Navbar.Brand>
      </Navbar> */}
        
      <div className = "title">
        <h1>UF Hackathoners</h1>  
      </div>    

      </div>

      <div className = "projects">        
        <Carousel breakPoints={breakPoints} style={ {transform: `translateY(${offsetY*0.5}px)`}}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>   
      
      </div>
    </div>
  ); 
}

export default App;
