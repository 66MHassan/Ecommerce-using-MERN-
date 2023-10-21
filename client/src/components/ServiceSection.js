import React from 'react';

const ServiceSection = () => {
  return (
    < >
      <div className="container py-5">
        <div className="row " >
          <div className="col-md-3 mx-auto rounded py-4" style={{background:"#D3D3D3"}}>
            <div className="service-box text-center">
              <i className="fas fa-truck fa-bounce"></i>
              <h3>Super Fast and Free Delivery</h3>
              <p> Get your products delivered quickly and at no extra cost, ensuring a seamless shopping experience.</p>
            </div>
          </div>
          
          <div className="col-md-3 mx-auto rounded py-4" style={{background:"#D3D3D3"}}>
            <div className="service-box text-center ">
              <i className="fas fa-money-bill-wave fa-bounce text-center "></i>
              <h3>Money Back Guaranteed</h3>
              <p> If you're not completely happy with your purchase, we'll refund your money—no questions asked.</p>
            </div>
          </div>
          <div className="col-md-3 mx-auto rounded py-4" style={{background:"#D3D3D3"}}>
            <div className="service-box text-center">
            <i className="fas fa-shield-alt fa-fade "></i>
              <h3 className='text-center'>Super Secure Payment System</h3>
              <p>Your security is our top priority.  ensuring your transactions are safe and worry-free."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
