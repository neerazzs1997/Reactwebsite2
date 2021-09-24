
import React from 'react';
import web from "../src/images/tree.png";
// import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    <Common name="Wellcome to my website Sharma's technical"
      imgsrc={web}
      visit="/services"
      btname="Get Started" />
  )
}

export default Home;



