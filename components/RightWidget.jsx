import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const PurchaseItemButtons = () => {
  // Initialize the main price
  const mainPrice = 1575.00;

  // Create a state variable to store the selected protection plan price
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);

  // Create a state variable to track if the protection plan is selected
  const [protectionPlanSelected, setProtectionPlanSelected] = useState(false);

  // Calculate the total price by adding the main price and selected plan price
  const totalPrice = mainPrice + selectedPlanPrice;

  // Function to handle button click and update the selected protection plan price
  const handleButtonClick = (price) => {
    setSelectedPlanPrice(price);
    setProtectionPlanSelected(true); // Set protection plan selected to true
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNowClick = () => {
    // Check if a protection plan is selected
    if (!protectionPlanSelected) {
      // Throw an error if no protection plan is selected
      throw new Error('Please select a protection plan before clicking "Buy Now".');
    } else {
      // You can now access the totalPrice variable here
      console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    }
  };

  return (
    <div className='rightSidebar m-5'>
      {/* Display the total price */}
      <h3 className='text-center'>Price: ${totalPrice.toFixed(2)}</h3>
      <Button variant="warning mt-4 payBtn" onClick={handleBuyNowClick}>Buy Now</Button>
      <div className="row proBtn">
        <div className="h6 m-3">Protection Plan</div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='1yearPro'
            onClick={() => handleButtonClick(350.00)}
          >
            1 year - $350.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='2yearPro'
            onClick={() => handleButtonClick(650.00)}
          >
            2 year - $650.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='3yearPro'
            onClick={() => handleButtonClick(1050.00)}
          >
            2 year - $1050.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='noPro'
            onClick={() => handleButtonClick(0.00)}
          >
            No Protection
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button className='mt-4 bg-primary'>Financing Available -- <small><em> Pay over 6 months</em></small></Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItemButtons;
