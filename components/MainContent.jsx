import React from 'react'
import Description from './Description'
import RightWidget from './RightWidget'
import ProductDetailBottom from './ProductDetailBottom'

function MainContent() {
  return (
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
  )
}


export default MainContent
//comment
