import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './LandingPage.css';


const LandingPage = ({page,handleAddEvent}) => {
    return (     
            <div className='col-md-3'>
                
                <Card className='Card' bg={page.color} text="white" style={{ width: '15rem', borderRadius:'20px 20px 20px 20px', marginBottom:'10px', marginTop:'10px'}}>
                    <Card.Img variant="top"  style={{height:'250px', borderRadius:'20px 20px 0px 0px'}} src={page.pic} />
                    <Card.Body >
                        <Card.Title>
                    <Button onClick ={() =>handleAddEvent(page)} variant={page.color} style={{height:'100%',width:'100%'}}>{page.name}</Button>
                    </Card.Title>
                    </Card.Body>
                </Card>
            </div>
    );
};

export default LandingPage;