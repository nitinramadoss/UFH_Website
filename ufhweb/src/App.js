import './App.css';
import React, { Component, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import ReactPlayer from 'react-player/youtube'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal'
import Slide from 'react-reveal/Slide';
import LeftMountain from './img/mountain1.png'
import RightMountain from './img/mountain2.png'
import Logo from './img/logo.png'

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
  })

  return (
    <div id="App" className="App">
      <section>
        <div className = "content">
        <Fade left duration = {1500}>
          <h1>
            UF Hackathoners <br/>
          </h1>
        </Fade>  
        <Reveal effect="typewriter" duration = {1500}>
          <p>An ACM Special Interest Group</p>
        </Reveal>
        </div>
      </section>

      <section className = "grad1">
        <Fade up>
          <div className = "bigText">
            TO
          </div>
        </Fade>
      </section>

      <section className = "grad2">
        <Fade up>
          <div className = "bigText">
            THE
          </div>
        </Fade>
      </section>

      <section className = "grad3">
        <Fade up>
          <div className = "bigText">
            PEAK
          </div>
        </Fade>
      </section>

      <section className = "mountains">
        <Slide left duration = {2500}>
          <img src={LeftMountain} alt="" id="mountain-left"/>
        </Slide>

        <Fade up duration = {2500}>
          <img src={Logo} alt="" id="logo"/>
        </Fade>

        <Slide right duration = {2500}>
          <img src={RightMountain} alt="" id="mountain-right"/>
        </Slide>
      </section>

      <section className = "grad4">
        <Fade up>
          <div className = "mediumText">
            MAX LEVEL HACKING
          </div>
        </Fade>
      </section>

      <section>
        <div className = "content"> 
          <Reveal effect="typewriter" duration = {1500}>
            <h1>Our Projects</h1>
          </Reveal>       
          <YoutubeCarousel/>          
        </div>
      </section>
    </div>
  ); 
}

function YoutubeCarousel() {
  return (
    <Carousel breakPoints={breakPoints} id = "carousel">
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
      </Carousel>
  );
}


export default App;
