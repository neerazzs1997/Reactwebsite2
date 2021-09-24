import React from 'react';


import Card from './Card';
import Sdata from './Sdata';


const Services = () => {
    return (
        <div >
          <h1 className="services"> Our Services</h1>
          <div className="cards">
          {
              Sdata.map((val,index)=>{
                  return(
                      <Card
                       imgsrc={val.image}
                       title={val.title}/>
                  )
              })
          }
          </div>
      </div>
           
    )
}


export default Services;

