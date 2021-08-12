import React, { useEffect } from 'react';
import Header from '../Header/Header';
import {Card,Button} from 'react-bootstrap'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../databaseManager';
import { landingPage } from '../LandingPage/Home';
import OnlyEvent from './OnlyEvent';

const Event_Tasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState([]);

    const removeproduct = (eventkey) =>
    {
        const newEvent = event.filter(pd => pd.key !== eventkey);
        setEvent(newEvent);
        removeFromDatabaseCart(eventkey);
    } 

    useEffect(()=>{
        const savedEvent = getDatabaseCart();
        const eventKeys = Object.keys(savedEvent);
        const eventTask = eventKeys.map( key =>{
            const event = landingPage.find(pd => pd.key === key);
            event.quantity = savedEvent[key];
            return event;
        });
        console.log(eventTask);
        setEvent(eventTask);

    },[])
    return (
        <div>
            <Header></Header>
            <h1>Welcome to  Event Task {loggedInUser.displayName} </h1>
            <h3>You have total : {event.length} events </h3>
            {
                event.map(pd=> <OnlyEvent
                eve ={pd}
                removeproduct ={removeproduct}
                >
                </OnlyEvent>)
            }
            
        </div>
    );
};

export default Event_Tasks;