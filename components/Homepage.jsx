import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Routes } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <div className="container-fluid p-0">
        <img src="./public/hero.jpg" alt="hero image" className='heroIm w-100' />
      </div>
      <div className="productGrid">
        <h2 className='text-center'>Newest Items In Our Collection</h2>
        <div className="row">
          <div className="col p-5 mt-3 text-center">
            <img src="./public/laurence-corner-couch-fossil.webp" alt="" height="250px" width="auto"/>
            <h3 className='p-3'>Stonehouse Leather Couch</h3>
            <Button variant='warning'>
              <Link to="StoneHouse-Leather-Couch">Order Here</Link>
            </Button>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default Homepage