import './App.css';
import './Card.css'
import React, { Component, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import WidgetBot from '@widgetbot/react-embed'
import Item from "./Item";
import ReactPlayer from 'react-player/youtube'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import LeftMountain from './img/mountain1.png';
import RightMountain from './img/mountain2.png';
import Logo from './img/logo.png';
import Rocket from './img/rocket.png';
import Moon from './img/moon.png';
import Star from './img/star.png';
import Cloud from './img/cloud.png';
import Collage from './img/ufhcollage.png';
import Leaderboard from './Card';
import GoogleCalendar from './GoogleCalendar';

const axios = require('axios').default;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() { 
  const [memberData, setData] = useState([]);
  const [offset, setOffset]= React.useState(0);
  const { height, width } = useWindowDimensions();
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    axios.get('http://localhost:8000/loadLeaderboard').then((response) => 
    {
      setData({ memberData: response.data});
    }).catch( (e) => console.log(e))
  }, [])

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
        <img src={Rocket} alt="" id="rocket" 
          style={{transform: `translate(${5-offset}px, ${5-offset}px) rotate(-45deg)`}}/>

        <img src={Moon} alt="" id="moon" 
                  style={{transform: `translate(${((5 + offset) < width*0.5) ? 5+offset : width*0.5}px, ${0}px)`}}/>

        <Zoom>
          <img src={Star} alt="" id="star1"/>
          <img src={Star} alt="" id="star2"/>
        </Zoom>

        <Fade up cascade>
          <div className = "bigText">
            TO
          </div>
        </Fade>
      </section>

      <section className = "grad2">
        <Fade left>
          <img src={Cloud} alt="" id="cloud1"/>
        </Fade>

        <Fade up cascade>
          <div className = "bigText">
            THE
          </div>
        </Fade>
      </section>

      <section className = "grad3">
        <Fade left>
          <img src={Cloud} alt="" id="cloud2"/>
        </Fade>

        <Fade right>
          <img src={Cloud} alt="" id="cloud3"/>
        </Fade>

        <Fade up cascade>
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

      <section>
        <Fade up>
          <div className = "mediumText">
            Welcome
          </div>
        </Fade>
      </section>

      <section>
        <div className = "content"> 
          <Fade right>
            <h1>Who are we?</h1>
          </Fade>   

            <Zoom delay = {500}>
              <p id="about">
                University of Florida's Hackathoners Club - "To The Peak"
                If you want brainstorming sessions, team formation assistance, 
                and technical workshops to enhance your hackathon experience, 
                UF Hackathoners is the group for you. We are an ACM SIG dedicated 
                to providing UF students the resources they need to participate and 
                compete in hackathons! We arrange teams for MLH and Pinnacle hackathons.
              </p>
            </Zoom>

            <Fade up delay = {1000}>
              <img src={Collage} alt="" id="collage"/>
            </Fade>
        </div>
      </section>

      <section>
        <div className = "content"> 
          <Fade right>
            <h1>Our Projects</h1>
          </Fade>       
          <YoutubeCarousel/>          
        </div>
      </section>

      <section>
        <div className = "content"> 
          <Fade right>
            <h1>Leaderboard</h1>
          </Fade>    

          <Fade up delay = {1000}>
            {(memberData == undefined || memberData.length == 0)? <div/> : <Leaderboard data={memberData}/>}   
          </Fade>   
        </div>
      </section>

      <section>
        <div className = "content"> 
          <Fade right>
            <h1>Announcements and Events</h1>
          </Fade>    

          <WidgetBot className = "widgetBot"
            server="803404321252835378"
            channel="803404321252835382">
          </WidgetBot>
        </div>
      </section>
    </div>
  ); 
}

function YoutubeCarousel() {
  return (
    <Carousel breakPoints={breakPoints} className = "carousel">
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
