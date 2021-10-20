import React from "react";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-4 sm:grid-cols-1 sm:gap-6 bg-gray-900 text-white py-6 mt-6">
      <div>
        <h6>
          <i className="fab fa-facebook"></i> Facebook
        </h6>
        <h6>
          {" "}
          <i className="fab fa-youtube"></i> Youtube
        </h6>
        <h6>
          {" "}
          <i class="fab fa-twitter"></i> Twitter
        </h6>
      </div>
      <div>
        <h6>Home</h6>
        <h6>About Us</h6>
        <h6>Contact</h6>
        <h6>Privacy & Policy</h6>
      </div>
      <div>
        <h6>
          {" "}
          <i class="fas fa-road"></i> 123, Road
        </h6>
        <h6>
          {" "}
          <i class="far fa-flag"></i> Dhaka, Bangladesh
        </h6>
        <h6>
          {" "}
          <i class="fas fa-phone"></i> Phone: 0123456789
        </h6>
      </div>
    </div>
  );
};

export default Footer;
