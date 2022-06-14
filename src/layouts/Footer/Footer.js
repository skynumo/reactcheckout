import './Footer.scss';
import React from 'react';
import { AmericanExpressIcon, AppStoreIcon, DiscoverIcon, DollarIcon, FacebookIcon, GiftIcon, GooglePlay, InstagramIcon, LinkedInIcon, Logo, MasterCardIcon, PaypalIcon, ReturnIcon, SearchIcon, TwitterIcon, UserIcon, VisaIcon, WishlistIcon, YoutubeIcon } from '../../_assets/icons/Icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
  
const Footer = (props) => {
 
  let navigate = useNavigate(); 

  const handleLogoClick = (e) =>{ 
    e.preventDefault();
    navigate('/');
  }

  const handleSubscribeField = (e) => {
    e.preventDefault();
    const {value} = e.target;
    console.log("Subscribe Email ", value )
  }

  const handleSubscribeButton = (e) => {
    e.preventDefault();
    console.log("Subscribe Button Clicked")
  }

  return (
    <>
      <div className="mainfooter-cover">
        <div className="container">
          <div className="whyshop-sectcov">
            <h3>WHY SHOP WITH US?</h3>
            <div className="whyshop-sectiner">
              <div className="whyshop-sectibox">
                <DollarIcon />
                <h4>CASH ON DELIVERY</h4>
                <p>Pay by cash when receiving your order</p>
              </div>
              <div className="whyshop-sectibox borderlrfix">
                <ReturnIcon />
                <h4>FREE & EASY RETURNS</h4>
                <p>We collect items you want to return
                  from your doorstep free of charge</p>
              </div>
              <div className="whyshop-sectibox">
                <GiftIcon />
                <h4>NO SURPRISES</h4>
                <p>Your order total is 100% guaranteed.
                  There will be no additional charges
                  due upon delivery</p>
              </div>
            </div>
          </div>
          <div className="offiappdow-box">
            <h3>newness OFFICIAL APPS</h3>
            <a href="javascript:void(0);">
              <AppStoreIcon />
            </a>
            <a href="javascript:void(0);">
              <GooglePlay />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="subcribenews-cov">
            <div className="subcribenews-iner">
              <p>Subcribe To our News</p>
              <div className="subcribenews-form">
                <input type="email" onChange={(e) => handleSubscribeField(e)} placeholder="Enter Email Address" />
                <button onChange={(e) => handleSubscribeButton(e)}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footernav-topmain">
            <div className="container">
              <div className="footernav-topiner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-footlogosoc">
                      <a href="javascript:void(0);" onClick={(e) => handleLogoClick(e)} className="footerlogo">
                        <Logo />
                      </a>
                      <p>A lifestyle app that believes you are capable of control. Selling 1000+ authentic brands with over 250,000 products. Offering to 1,000,000 users worldwide. With our 24/7 customer service, tackle any issues you may face. Instantly.</p>
                      <ul>
                        <h3>Connect With Newness</h3>
                        <li>
                          <a href="javascript:void(0);">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <FacebookIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <YoutubeIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <LinkedInIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footernav-menulist">
                      <ul>
                        <h3>Infomation</h3>
                        <li><a href="javascript:void(0);">About Us</a></li>
                        <li><a href="javascript:void(0);">Contact Us</a></li>
                        <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                        <li><a href="javascript:void(0);">Returns & Refunds</a></li>
                        <li><a href="javascript:void(0);">Shipping & Delivery</a></li>
                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                        <li><a href="javascript:void(0);">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footernav-menulist">
                      <ul>
                        <h3>Quick Links</h3>
                        <li><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#signin">My Account</a></li>
                        <li><a href="javascript:void(0);">Wishlist</a></li>
                        <li><a href="javascript:void(0);">All Brands</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobilefootlinksetcov">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Infomation
                          </button>
                          </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul>
                              <li><a href="javascript:void(0);">About Us</a></li>
                              <li><a href="javascript:void(0);">Contact Us</a></li>
                              <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                              <li><a href="javascript:void(0);">Returns & Refunds</a></li>
                              <li><a href="javascript:void(0);">Shipping & Delivery</a></li>
                              <li><a href="javascript:void(0);">Privacy Policy</a></li>
                              <li><a href="javascript:void(0);">FAQs</a></li>
                            </ul>
                          </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Quick Links
                          </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul>
                              <li><a href="javascript:void(0);">My Account</a></li>
                              <li><a href="javascript:void(0);">Wishlist</a></li>
                              <li><a href="javascript:void(0);">All Brands</a></li>
                            </ul>
                          </div>
                          </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-payoptlist">
            <div className="container">
              <div className="footer-payoptiner">
                <p>We Accept</p>
                <a href="javascript:void(0);"><PaypalIcon /></a>
                <a href="javascript:void(0);"><VisaIcon /></a>
                <a href="javascript:void(0);"><DiscoverIcon /></a>
                <a href="javascript:void(0);"><MasterCardIcon /></a>
                <a href="javascript:void(0);"><AmericanExpressIcon /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="tabnavdata-covlist">
        <ul>
          <li className="active">
            <a href="javascript:void(0);">
              <i class='bx bx-home'></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-gift'></i>
              <span>Gift</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-category'></i>
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-heart'></i>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-cart'></i>
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer;