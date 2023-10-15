import React from 'react'


function Homepage() {
  return (
    <div>
      <div className="container-fluid p-0">
        <img src="./public/hero.jpg" alt="hero image" className='heroIm w-100' />
      </div>
      <div className="productGrid">
        <h2 className='text-center'>Newest Items In Our Collection</h2>
      </div>
    </div>
  )
}

export default Homepage