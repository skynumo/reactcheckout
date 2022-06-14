import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.scss';
import BannerImg from "../../_assets/images/banner/banner.jpg"; 

const Banner = (props) => {
  return (
    <>
      <div className="banner-card">
        <img className="card-img-top" src={BannerImg} alt="profile" />
        <div className="card-body">
          <h1 className="card-title">Learn React JS</h1>
          <p className="card-text">Some quick example text Some quick example text Some quick<br /> example text Some quick example text</p>
          <Button variant="primary">Start Now!</Button>
        </div>
      </div> 
    </>
  )
}

export default Banner;