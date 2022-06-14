import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NextIcon } from '../../_assets/icons/Icons';

const Breadcrumbs = (props) => {

  let navigate = useNavigate(); 

  const navigateToHome = (e) =>{ 
    e.preventDefault();
    navigate('/');
  }

  return (
    <>
      <div className="bredcu-main">
        <div className="container">
          <ul>
            <li>
              <a onClick={(e) => navigateToHome(e)} href="javascript:void(0);">Home</a>
              <NextIcon />
            </li>
            <li>
              <p>Shopping Cart</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Breadcrumbs;