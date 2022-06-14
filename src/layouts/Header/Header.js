import './Header.scss';
import React from 'react';
import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from '../../_assets/icons/Icons';
import { useNavigate } from 'react-router-dom';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { toast } from 'react-toastify';
import SignInModal from '../../components/modal/SigninModal/SignInModal';
import SignUpModal from '../../components/modal/SignUpModal/SignUpModal';
import { useDispatch, useSelector } from 'react-redux';
import { showSignInModal } from '../../_actions/authModalActions';
import { useLocation } from "react-router-dom"
import ProductImage from "../../_assets/images/product-img.png";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
  
const Header = (props) => {

  const location = useLocation()
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.products);

  const [selected, setSelected] = useState("");
  
  let navigate = useNavigate(); 
  const handleLogoClick = (e) =>{ 
    e.preventDefault();
    navigate('/');
  }

  const handleSearchByKeywords = (e) => {
    e.preventDefault();
    const {value} = e.target;
    console.log("Search ", value )
  }

  const handleCartClick = (e) => {
    navigate('/cart');
  }

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    navigate('/checkout');
  }

  const handleClearCartClick = (e) => {
    e.preventDefault();
    // Write Clear logic here
    toast.success('Cart cleared successfully.')
  }

  const handleUserIconClick = () => {
    dispatch(showSignInModal());
  }

  return (
    <>
    <header>
      <div className="hedtop_mainbar">
        <a href="#">ENJOY UP TO 70% OFF. USE CODE NEWNESS</a>
      </div>
      <div className="headerdata_one">
        <div className="container">
          <div className="hedlengdata">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </div>
          <div className="midlogodata">
            <a href="javascript:void(0);" onClick={(e) => {handleLogoClick(e)}}>
              <Logo />
            </a>
          </div>
          <div className="rightuercartdata">
            <div className="rightuercart_iner">
              <div className="hed_userbtntop">
                <a href="javascript:void(0);" onClick={(e) => {handleUserIconClick(e)}}>
                  <UserIcon />
                </a>
              </div>
              <div className="hed_wishlistbtntop">
                <a href="javascript:void(0);">
                  <WishlistIcon />
                </a>
              </div>
              <div className="hed_cartbtntop">
                <div className="iSelect fixedWidth rounded">
                  <label for="chk">
                    <input aria-hidden="true" id="chk" type="checkbox" />
                    <span className="select-label active" title="Select the model">
                      <CartIcon />
                      <b>1</b>
                    </span>

                    <ul role="listbox">
                      <div className="maindicrtdati-cov">
                        <h3>My Cart</h3>
                        <div className="maindicrtdati-inr">
                        
                          {cartData.map((product, pidx) => {
                            return <div className="maindicrtdati-prodlst">
                              <div className="maindicrtdati-left">
                                <img src={product?.image} alt="Product" />
                              </div>
                              <div className="maindicrtdati-right">
                                <a href="javascript:void(0);">{product?.title}</a>
                                <h6>{product?.quantity} X ${product?.price}</h6>
                              </div>
                              <a href="javascript:void(0);" className="cartdorp-remove"><i className='bx bx-x'></i></a>
                            </div>
                          })
                          }

                          <div className="carttog-total">
                            <h5>TOTAL PRICE</h5>
                            <h4>$538.00</h4>
                          </div>

                          <div className="togcart-myvcartalbtn">
                            <a href="javascript:void(0);" onClick={(e) => handleCartClick(e)} className="tog-viewcartbtn">View My Cart</a>
                            <a href="javascript:void(0);" onClick={(e) => handleCheckoutClick(e)} className="tog-gotodesh">Go To checkout</a>
                            <a href="javascript:void(0);" onClick={(e) => handleClearCartClick(e)} className="tog-clearcart">Clear Cart</a>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="headerdata_nav">
            <div className="headerdata_manu">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="cover-namenulogonav">
                  {/* <!-- <div className="left-navmenulogo">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div> --> */}
                  <div className="collapse navbar-collapse right-hednavmaincov" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown actmenudaminbtn">
                        <a className="nav-link dropdown-toggle d-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Women <svg className="navarrowbtnmenu" id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Men <svg className="navarrowbtnmenu" id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Kids <svg className="navarrowbtnmenu" id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Electronics</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="headerdata_search">
              <input type="text" autoComplete='off' onChange={(e) => handleSearchByKeywords(e)} placeholder="Search Here" />
              <button><SearchIcon /></button>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="headerdata_two">
        <div className="container">
          <div className="mobile_headercov">
            <div className="mobile_headerleft">
              <a href="javascript:void(0);">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div className="mobile_headeright">
              <div className="hedlengdata mobile_setbox">
                <form>
                  <div className="form-item">
                    <input id="country_selector2" type="text" />
                    <label for="country_selector" className='d-none'>Select a country here...</label>
                  </div>
                </form>
              </div>
              
              <div className="mobile_heduser1">
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#signup_mobile">
                  <img src="svg/user-icon-hed.svg" alt="" />
                </a>
              </div>
              <div className="mobile_hedusearch">
                {/* <!-- <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#signin">
                  <img src="svg/search-icon-hed.svg" alt="" >
                </a> --> */}
                <div id="wrap">
                  <form action="" autoComplete="on">
                    <input id="search" name="search" type="text" placeholder="Search Here" />
                    <input id="search_submit" value="Rechercher" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botmenucetsltmain">
          <div className="container">
            <ul> 
              <li className="active">
                <a href="javascript:void(0);">Women</a>
              </li>
              <li>
                <a href="javascript:void(0);">Men</a>
              </li>
              <li>
                <a href="javascript:void(0);">Kids</a>
              </li>
              <li>
                <a href="javascript:void(0);">Electronics</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="hedsubmenu_listcov">
        <div className="container">
          <ul>
            <li>
              <a href="javascript:void(0);">Brand</a>
            </li>
            <li><a href="javascript:void(0);">Accessories</a></li>
            <li><a href="javascript:void(0);">Sports</a></li>
            <li><a href="javascript:void(0);">Bags</a></li>
            <li><a href="javascript:void(0);" className="browse item">Shoes</a></li>
            <li className="mega-dropdown menusumegamin_cov">
              <a href="javascript:void(0);" className="browse item">New Arivals</a>
              <div className="megamenu">
                <div className="mainmegamenusetcov">
                  <div className="mainmegamenuset_navlist rightbordermegasub">
                    <h5>SHOP BY PRODUCT</h5>
                    <a href="">Shoes</a>
                    <a href="">Accessories</a>
                    <a href="">Bags</a>
                    <a href="">Beauty</a>
                    <a href="">Home & gifting</a>
                    <a href="">sports</a>
                    <a href="">Boutique</a>
                    <a href="">Streetwear</a>
                    <a href="">Modest</a>
                  </div>
                  <div className="mainmegamenuset_navlist">
                    <h5>SHOP BY New in</h5>
                    <a href="">Dresses</a>
                    <a href="">TOpS</a>
                    <a href="">T-shirts & vests</a>
                    <a href="">Arabian clothing</a>
                    <a href="">Pants & leggings</a>
                    <a href="">Abayas</a>
                    <a href="">Jumpsuits & Playsuits</a>
                    <a href="">Hoodies & sweatshirts</a>
                    <a href="">Skirts</a>
                    <a href="">Jackets & coats</a>
                  </div>
                  <div className="mainmegamenuset_imgdata">
                    <img src="images/mega-menu-img.png" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li><a href="javascript:void(0);">Clothing</a></li>
          </ul>
        </div>
      </div>
    </header>
    {location.pathname !== '/' && <Breadcrumbs /> }
    <SignInModal />
    <SignUpModal />
    </>
  )
}

export default Header;