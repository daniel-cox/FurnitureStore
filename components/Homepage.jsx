import React from 'react';
import { Button,Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './global/Footer';
import productData from './config';


function Homepage() {

  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/StoneHouse-Leather-Couch')
  }
  const style = {fontFamily:
     "'Aboreto', 'Bebas Neue', 'sans-serif'",
     background: '-webkit-linear-gradient(40deg, #cf4529, #cf29be, #2966cf)',
     WebkitBackgroundClip: 'text',
     WebkitTextFillColor: 'transparent',
    }

  return (
    <div>
          <img src="./public/hero.jpg" alt="hero image" className='z-1 heroIm w-100' />
        <div className="productGrid">
            <div className='overlay-text'>
                 <h2 className='z-2 text-center position-absolute heroText' style={style}>A Touch of Modern Luxury for Your Home</h2>
            </div>
            <div className="row">
            <h2 className='text-center mt-4'>Newest Items In Our Collection</h2>
                <div className="col p-5 mt-3 text-center">
                  <img src={productData.product1.itemImageBtm} alt="" height="250px" width="auto"/>
                  <h3 className='p-3'>{productData.product1.itemName}</h3>
                  <Button onClick={handleButtonClick} variant='warning'>
                    <Link to="StoneHouse-Leather-Couch">Order Here</Link>
                  </Button>
                </div>
                <div className="col p-5 mt-3 text-center">
                    <img src={productData.product2.itemImageBtm} alt="" height="250px" width="481px"/>
                  <h3 className='p-3'>{productData.product2.itemName}</h3>
                  <Badge bg="danger" style={{ padding: '0.7rem' }}>Sold Out</Badge>
                </div>

                <div className="col p-5 mt-3 text-center">
                  <img src="./public/laurence-corner-couch-fossil.webp" alt="" height="250px" width="auto"/>
                  <h3 className='p-3'>Stonehouse Leather Couch</h3>
                  <Badge bg="danger" style={{ padding: '0.7rem' }}>Sold Out</Badge>
                </div>
             </div>
            <section>
              <img src="./public/designerLooks.jpg" alt="" className='midSectionImg img-responsive w-100'/>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage