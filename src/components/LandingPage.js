import React from 'react';
import Card from 'react-bootstrap/Card';


const LandingPage = ({page}) => {
    console.log(page);
    return (     
            <div className='col-md-3'>
                <Card bg={page.color} text="white" style={{ width: '15rem', borderRadius:'20px 20px 20px 20px', marginBottom:'10px', marginTop:'10px'}}>
                    <Card.Img variant="top"  style={{height:'250px', borderRadius:'20px 20px 0px 0px'}} src={page.pic} />
                    <Card.Body >
    <Card.Title>{page.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
    );
};

export default LandingPage;