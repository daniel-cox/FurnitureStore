import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const YourComponent = () => {
  // Initialize the main price
  const mainPrice = 1575.00;

  // Create a state variable to store the selected protection plan price
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);

  // Function to handle button click and update the selected protection plan price
  const handleButtonClick = (price) => {
    setSelectedPlanPrice(price);
  };

  // Calculate the total price by adding the main price and selected plan price
  const totalPrice = mainPrice + selectedPlanPrice;

  return (
    <div className='rightSidebar mt-5'>
      {/* Display the total price */}
      <h3>Price: ${totalPrice.toFixed(2)}</h3>
      <Button variant="warning mt-4">Buy Now</Button>{' '}
      <div className="row">
        <div className="h6 pt-3">Protection Plan</div>
        <div className="col">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='2yearPro'
            onClick={() => handleButtonClick(299.00)}
          >
            2 year - $299.00
          </Button>{''}
        </div>
        <div className="col">
          <Button
            variant="light"
            id='3yearPro'
            onClick={() => handleButtonClick(375.00)}
          >
            3 year - $375.00
          </Button>{''}
        </div>
        <div className="col">
          <Button
            variant="light"
            id='4yearPro'
            onClick={() => handleButtonClick(423.00)}
          >
            4 year - $423.00
          </Button>{''}
        </div>
        <div className="col">
          <Button
            variant="light"
            id='noProtection'
            onClick={() => handleButtonClick(0.00)}
          >
            No Protection
          </Button>{''}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
