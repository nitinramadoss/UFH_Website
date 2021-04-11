import './App.css';
import React, { Component, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import ReactPlayer from 'react-player/youtube'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() { 
  const [offset, setOffset]= React.useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  // style={ {transform: `translateY(${offsetY*0.5}px)`}}

  return (
    <div className="App">

      <section>
        <div className = "home">
          <h1>
            UF Hackathoners <br/>
          </h1>
          <p>An ACM Special Interest Group</p>
        </div>
      </section>

      <section>
        <div className = "projects">        
          <Carousel breakPoints={breakPoints}>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=0Hh8VspdDWs&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=osYg9M86WUU&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=vHYlUago1nU&feature=emb_imp_woyt' /> 
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=kUTqOXU9ypo&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=AgzC_uuOSPg&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=rgMyuhUWhz8&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=WWbYugJHh28&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=QsaD0D6Kwe0&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=kjyfBYvqjAc&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=sGpmK0HYS6s&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=qjPpTPBk1YU&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=TCdYTP8y7V0' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=lfjNs9mp4sM&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=Xxa5DlaqBBg&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=n6VCUdlhExs&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=ekmyuBPPni0&feature=emb_imp_woyt' />
            </Item>
            <Item>
              <ReactPlayer url='https://www.youtube.com/watch?v=ekmyuBPPni0&feature=emb_imp_woyt' />
            </Item>
          </Carousel>          
        </div>
      </section>

    </div>
  ); 
}

export default App;
