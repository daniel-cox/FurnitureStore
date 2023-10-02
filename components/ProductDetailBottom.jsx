import React from 'react'
import config from './config'


function ProductDetailBottom() {
  const itemImage = config.itemImageBtm

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-5">
                <h1>Leather Perfection: Where Comfort Meets Style in Every Stitch</h1>
                <p className='mt-5 BottomHeader'>Experience the ultimate in comfort and sophistication with our exquisite leather couch. Crafted for enduring style and unparalleled softness, it's the perfect centerpiece for your living space. Elevate your home decor with timeless elegance</p>
            </div>
            <div className="col">
                <img src={itemImage} alt="couch side view" className='img-fluid'/>
            </div>
        </div> 
    </div>
  )
}

export default ProductDetailBottom