import React from 'react';
import './event.css';

const OnlyEvent = (props) => {
    console.log(props)
    const {name,key,color,pic,quantity} = props.eve;
    return (
    
        <div style={{backgroundColor:{color}}} className="events" >
                    <div className="event">
                        <img  src={pic} alt=""/>
                    </div>
                    <div className="eventDes">
                        <h3>{name}</h3>
                        <p >Quantity: {quantity}</p>
                        <p>Key: {key}</p>
                        <br />
                        <button  style={{backgroundColor:{color}}} className="btn btn-primary" onClick={()=>{props.removeproduct(key)}}>Delete</button>
                    </div>
        </div>
    );
};

export default OnlyEvent;