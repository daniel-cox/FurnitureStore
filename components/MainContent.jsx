import React from 'react';
import Description from './Description';
import RightWidget from './RightWidget';
import ProductDetailBottom from './ProductDetailBottom';
import Reviews from './Reviews';
import Footer from './global/Footer';
import productData from './config';
function MainContent() {


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className='text-center mt-5'>{productData.product1.itemName}</h1>
            <img src={productData.product1.itemImage} alt="Stonehouse Leather Couch" width="750px" className='mt-5'/>
          </div>
          <div className="col">
            <RightWidget />
          </div>
          <div className="row">
            <div className="col">
              <Description />
            </div>
          </div>
        </div>
      </div>
     <div className="row">
      <div className="col-12">
        <div className="container-fluid mt-5">
        <ProductDetailBottom />
    </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container-fluid">
          <Reviews />
      </div>
        </div>
          </div>
        </div>
        <Footer />
      </>
  )
}


export default MainContent
