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
      <div className="container-fluid px-0">
          <img src="./public/hero.jpg" alt="hero image" className='z-1 heroIm w-100' />
          <div className="productGrid">
            <div className='overlay-text'>
              <h2 className='z-2 text-center position-absolute heroText'>A Touch of Modern Luxury for Your Home</h2>
            </div>
            <h2 className="text-center mt-4">Newest Items In Our Collection</h2>
            <div className="row pGrid">
              <div className="col p-3 mt-3 text-center">
                <img src={productData.product1.itemImage} alt={productData.product1.itemMeta} className="img-fluid" />
                <div className="infoContainer"> 
                  <h6 className="pt-3">{productData.product1.itemBrand}</h6>
                  <h3>{productData.product1.itemName}</h3>
                  <button onClick={() => handleButtonClick('StoneHouse-Leather-Couch')} type="button" className="btn btn-warning">Order Here</button>
                </div>
              </div>
              <div className="col p-3 mt-3 text-center">
                <img src={productData.product2.itemImage} alt={productData.product2.itemMeta} className="img-fluid" />
                <div className="infoContainer">
                  <h6 className="pt-3">{productData.product2.itemBrand}</h6>
                  <h3>{productData.product2.itemName}</h3>
                  <button type="button" className="btn btn-danger">Sold Out</button>
                </div>
              </div>
              <div className="col p-3 mt-3 text-center">
                <img src={productData.product3.itemImage} alt={productData.product3.itemMeta} className="img-fluid" />
                <div className="infoContainer">
                  <h6 className="pt-3">{productData.product3.itemBrand}</h6>
                  <h3>{productData.product3.itemName}</h3>
                  <button type="button" className="btn btn-danger">Sold Out</button>
                </div>
              </div>
            </div>
            <section>
              <h1 className='btmImageText'>Some text</h1>
              <img src="./public/designerLooks.jpg" alt="Designer Looks" className='midSectionImg img-fluid w-100 pt-5' />
            </section>
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default Homepage;
