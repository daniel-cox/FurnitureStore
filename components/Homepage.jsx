import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './global/Footer';
import productData from './config';

function Homepage() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  }

  return (
    <div>
      <div className="container-fluid">
          <img src="./public/hero.jpg" alt="hero image" className='z-1 heroIm w-100' />
          <div className="productGrid">
            <div className='overlay-text'>
              <h2 className='z-2 text-center position-absolute heroText'>A Touch of Modern Luxury for Your Home</h2>
            </div>
            <div className="row">
              <h2 className="text-center mt-4">Newest Items In Our Collection</h2>

              <div className="col p-3 mt-3 text-center">
                <img src="public/laurence-corner-couch-fossil2.webp" alt="StoneHouse Leather Couch" className="img-fluid" />
                <h3 className="p-3">StoneHouse Leather Couch</h3>
                <button type="button" className="btn btn-warning">Order Here</button>
              </div>

              <div className="col p-3 mt-3 text-center">
                <img src="public/sleighBed.png" alt="Ashley King Sleigh Bed" className="img-fluid" />
                <h3 className="p-3">Ashley King Sleigh Bed</h3>
                <span className="badge bg-danger">Sold Out</span>
              </div>

              <div className="col p-3 mt-3 text-center">
                <img src="public/laurence-corner-couch-fossil.webp" alt="Stonehouse Leather Couch" className="img-fluid" />
                <h3 className="p-3">Stonehouse Leather Couch</h3>
                <span className="badge bg-danger">Sold Out</span>
              </div>
            </div>
            <section>
              <img src="./public/designerLooks.jpg" alt="Designer Looks" className='midSectionImg img-fluid w-100' />
            </section>
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default Homepage;
