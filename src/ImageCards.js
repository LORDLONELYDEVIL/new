import React from 'react';
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const ImageCards=()=>{
    return(
        
        <div className=' d-block'>
         <div className='c2'>
            <Card className='  border-success '>
            <Card.Img variant='top' src={require('../src/assets/cat (1).jpg')}/>
            <Card.Body>
                <Card.Title style={{color:'white'}}>Images</Card.Title>
                <Card.Footer className='bg-primary'>
                    <Button style={{width:175}}  variant='primary'>Check Out Here</Button>
                </Card.Footer>
            </Card.Body>
            </Card>
         </div> 
         <div className='c2'>
            <Card className='   border-success'>
            <Card.Img variant='top' src={require('../src/assets/cat (2).jpg')}/>
            <Card.Body>
                <Card.Title style={{color:'white'}}>Images</Card.Title>
                <Card.Footer className='bg-primary'>
                    <Button  style={{width:175}} variant='primary'>Check Out Here</Button>
                </Card.Footer>
            </Card.Body>
            </Card>
         </div> 
         <div className='c2 '>
            <Card className='  border-primary text-light'>
            <Card.Img variant='top' src={require('../src/assets/cat (2).jpg')}/>
            <Card.Body>
                <Card.Title style={{color:'white'}}>Images</Card.Title>
                <Card.Footer className='bg-primary'>
                    <Button  style={{width:175}}  variant='primary'>Check Out Here</Button>
                </Card.Footer>
         

     
           </Card.Body>
            </Card>
         </div>    
        </div>    
    )
}
export default ImageCards;

