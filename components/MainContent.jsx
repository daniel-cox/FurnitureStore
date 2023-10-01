import React from 'react'
import Description from './Description'
import RightWidget from './RightWidget'
import ProductDetailBottom from './ProductDetailBottom'
import Reviews from './Reviews'

function MainContent() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="components/images/laurence-corner-couch-fossil.webp" alt="Fossile Couch" width="750px" className='mt-5'/>
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
      </>
  )
}


export default MainContent
