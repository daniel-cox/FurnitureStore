import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './global/Footer';


function Homepage() {

  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/StoneHouse-Leather-Couch')
  }
  const style = {fontFamily:
     "'Aboreto', 'Bebas Neue', 'sans-serif'",
     background: '-webkit-linear-gradient(45deg, #f06, #2d1593)',
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
                  <img src="./public/laurence-corner-couch-fossil.webp" alt="" height="250px" width="auto"/>
                  <h3 className='p-3'>Stonehouse Leather Couch</h3>
                  <Button onClick={handleButtonClick} variant='warning'>
                    <Link to="StoneHouse-Leather-Couch">Order Here</Link>
                  </Button>
                </div>
                <div className="col p-5 mt-3 text-center">
                    <img src="./public/laurence-corner-couch-fossil.webp" alt="" height="250px" width="auto"/>
                  <h3 className='p-3'>Stonehouse Leather Couch</h3>
                  <Button onClick={handleButtonClick} variant='warning'>
                    <Link to="StoneHouse-Leather-Couch">Order Here</Link>
                  </Button>
                </div>

                <div className="col p-5 mt-3 text-center">
                  <img src="./public/laurence-corner-couch-fossil.webp" alt="" height="250px" width="auto"/>
                  <h3 className='p-3'>Stonehouse Leather Couch</h3>
                  <Button onClick={handleButtonClick} variant='warning'>
                    <Link to="StoneHouse-Leather-Couch">Order Here</Link>
                  </Button>
                </div>
             </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage