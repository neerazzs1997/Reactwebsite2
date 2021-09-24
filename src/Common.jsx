import React from 'react';
// import web from "../src/images/tree.png";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <div className="section">
      <div className="box">
        <h1 className="h1-title">{props.name}</h1>
        <h3 className="h3-title"> We are the team of talented developer making website</h3>
        <NavLink to={props.visit} className="btn btn-primary" >{props.btname}</NavLink>
      </div>
      <div className="img-fluid header-img" >
        <img src={props.imgsrc} className="img-fluid animated" alt="common-img" />
      </div>
    </div>
  )
}

export default Common;



