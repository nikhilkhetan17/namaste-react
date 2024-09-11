import React from 'react';
import ReactDOM from 'react-dom/client';

/*

Header
  - Logo
  - Nav Links

Body
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Img,
    - Name of Res, Rating, Cuisine, Delivery time

Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://play-lh.googleusercontent.com/McWrS_uCmc8qVm0fCdJLCHye3QqQEQhRUsYMyCpT49WWo7CdkoNJTAZz2X_dROF93fsy"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props); //object
  const { resName, cuisine } = props; //Destructuring
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img className="res-image" src={props.image} alt="" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Box</div>
      <div className="res-container">
        {/* Passing props to the component */}
        <RestaurantCard
          resName="Kushi Sweets"
          cuisine="Chule Bhature, North Indian, Asian"
          rating="4.3 star"
          deliveryTime="30 minutes"
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z1oq4fnnrgw5zpey6l2p"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Chicken, Fast Food"
          rating="4.4 star"
          deliveryTime="40 minutes"
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_641841.JPG"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
