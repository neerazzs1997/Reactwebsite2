import React from 'react';
import web1 from "../src/images/tree1.png";
// import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
        <Common name="Wellcome to About page"
            imgsrc={web1}
            visit="/contact"
            btname="Contact now" />
    )
}

export default About;

