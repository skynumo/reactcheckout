import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import ProductImage from '../../_assets/images/product-img.png';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

const CheckoutPage = (props) => {
	const location = useLocation()

	const cartData = useSelector(state => state.cart.products);
	
	const [checkoutStep, setCheckoutStep] = useState(1);
	const stepOneClasses = 'formset-one active'
	const stepTwoClasses = checkoutStep >= 2 ? 'formset-two active' : 'formset-two'
	const stepThreeClasses = checkoutStep >= 3 ? 'formset-three active' : 'formset-three'

	useEffect(() => {
		if (location) {
			if (location.pathname === '/checkout') {
				setCheckoutStep(2)
			}
			if (location.pathname === '/payment') {
				setCheckoutStep(3)
			}
		}
	
		return () => {
			setCheckoutStep(1)
		}
	}, [location])
	
	const handleCheckoutContinue = (e) => {
		e.preventDefault();
		if (checkoutStep <= 2) {
			setCheckoutStep(checkoutStep + 1);
		}
	}

	const handleContinueShopping = (e) => {
		e.preventDefault();
		setCheckoutStep(1);
		toast.success('Continue Shopping button clicked');
	}

	const handleReturnToCart = (e) => {
		e.preventDefault();
		setCheckoutStep(1);
	}

	const handleReturnToShipping = (e) => {
		e.preventDefault();
		setCheckoutStep(2);
	}

	const handlePaynow = (e) => {
		e.preventDefault();
		setCheckoutStep(3);
	}

	const handleRemoveCartItem = (e, pid) => {
		e.preventDefault();
		toast.success("Remove Product ID: " + pid + " Clicked");
	}

	const incrementProductQty = (e, pid) => {
		e.preventDefault();
		toast.success("Plus Qty " + pid + " Clicked");
	}

	const decrementProductQty = (e, pid) => {
		e.preventDefault();
		toast.success("Minus Qty " + pid + " Clicked");
	}
	
	return (
		<>
			<div className="container maincartcheotpage">
				<div className="row">
					<div className="col-12">
						<div className="mainchekoutform-card">
							<form id="msform">
								<ul id="progressbar" className="prodrformcartchot-cov">
									<li className={stepOneClasses} id="account">
										<p>Your Shopping Cart</p>
									</li>
									<li className={stepTwoClasses} id="personal">
										<p>Shipping Address</p>
									</li>
									<li className={stepThreeClasses} id="payment">
										<p>Payment Methods</p>
									</li>
									{/* <!-- <li id="confirm"><strong>Finish</strong></li> --> */}
								</ul>

								{checkoutStep === 1 &&
									<fieldset>
										<div className="cartcheckotpage-cov">

											<div className="cartcheckotpage-right">
												<div className="orderSummary-box">
													<div className="ordsumm-title">
														<h3>Order Summary</h3>
													</div>
													<div className="orderSumma-main1">
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Items 3 </p>
															</div>
															<div className="ordSummain-right">
																<p>$447.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Shipping Charges</p>
															</div>
															<div className="ordSummain-right">
																<p>$20.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Tax</p>
															</div>
															<div className="ordSummain-right">
																<p>$2.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Discount</p>
															</div>
															<div className="ordSummain-right">
																<p>$0.00</p>
															</div>
														</div>
													</div>
													<div className="sumertotal-cost">
														<div className="sumertotacost-left">
															<p>TOTAL COST</p>
														</div>
														<div className="sumertotacost-right">
															<p>$469.00</p>
														</div>
													</div>
													<div className="applydiscot-main">
														<h6>Apply Discount Code</h6>
														<div className="applydiscot-form">
															<input type="text" placeholder="Enter discount code" />
															<a href="javascript:void(0);">Apply</a>
														</div>
													</div>
												</div>
											</div>
											<div className="cartcheckotpage-left">
												<div className="cartcheckotpage-title">
													<h2>Your Shopping Cart</h2>
												</div>
												<div className="cartcheckotpage-carttbl">
													<table className="table">
														<thead>
															<tr>
																<th scope="col">Product</th>
																<th scope="col">Price</th>
																<th scope="col">Quantity</th>
																<th scope="col"></th>
															</tr>
														</thead>
														<tbody>
															{ cartData && cartData.map((product, indx) => {
																return <tr>
																		<td className="prodeist-tbl">
																			<img src={product?.image} alt="" />
																			<p>{product?.title}<br />
																			{product?.category}</p></td>
																		<td>${product?.price}</td>
																		<td className="carcpuntdata">
																			<div className="button-container carcpunt-inercot">
																				<button onClick={(e) => decrementProductQty(e, product.id)} className="cart-qty-minus" type="button" value="-">-</button>
																				<input type="text" name="qty" min="0" className="qty form-control" value={product?.quantity} />
																				<button onClick={(e) => incrementProductQty(e, product.id)} className="cart-qty-plus" type="button" value="+">+</button>
																			</div>
																		</td>
																		<td className="catprod-remove">
																			<a onClick={(e) => handleRemoveCartItem(e, product.id)} href="javascript:void(0);"><i class='bx bx-x'></i></a>
																		</td>
																	</tr>
															})}
														</tbody>
													</table>
												</div>
											</div>
										</div>

										<br />
										<input type="button" name="next" onClick={(e) => handleCheckoutContinue(e)} className="next action-button nxtprvbtnsetmaincov1" value="Continue to Checkout" />
										<div className="cotcoshop-albtncart">
											<a onClick={(e) => handleContinueShopping(e)} href="javascript:void(0);">Continue Shopping</a>
										</div>
									</fieldset>
								}

								{checkoutStep === 2 &&
									<fieldset>
										<div className="cartcheckotpage-cov">

											<div className="cartcheckotpage-right">
												<div className="orderSummary-box">
													<div className="ordsumm-title">
														<h3>Order Summary</h3>
													</div>
													<div className="ordsmrwithimgteprod_cov">
														<div className="ordsmrwithimgteprod_iner">
															<div className="ordsmrwithimgteprod_left">
																<img src={ProductImage} alt="" />
																<h5>Smock Dress</h5>
																<p>Qty - 1</p>
															</div>
															<div className="ordsmrwithimgteprod_right">
																<p>$149.00</p>
															</div>
														</div>
														<div className="seemorbtnlinkcovcrt">
															<a href="#">See More</a>
														</div>
													</div>
													<div className="orderSumma-main1">

														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Shipping Charges</p>
															</div>
															<div className="ordSummain-right">
																<p>$20.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Tax</p>
															</div>
															<div className="ordSummain-right">
																<p>$2.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Discount</p>
															</div>
															<div className="ordSummain-right">
																<p>$0.00</p>
															</div>
														</div>
													</div>
													<div className="sumertotal-cost">
														<div className="sumertotacost-left">
															<p>TOTAL COST</p>
														</div>
														<div className="sumertotacost-right">
															<p>$469.00</p>
														</div>
													</div>
													<div className="applydiscot-main">
														<h6>Apply Discount Code</h6>
														<div className="applydiscot-form">
															<input type="text" placeholder="Enter discount code" />
															<a href="javascript:void(0);">Apply</a>
														</div>
													</div>
												</div>
											</div>
											<div className="cartcheckotpage-left">
												<div className="cartcheckotpage-title">
													<h2>Shipping Address</h2>
												</div>
												<div className="shipaddress-maincov" >
													<h6><a href="javascript:void(0);">Already have an account? Log in</a></h6>
													<div className="shipaddressformset">
														<div className="row">
															<div className="col-md-6">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<input type="text" className="form-control" id="" placeholder="Enter First name" />
																	</div>
																</div>
															</div>
															<div className="col-md-6">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<input type="text" className="form-control" id="" placeholder="Enter Last name" />
																	</div>
																</div>
															</div>
														</div>
														<div className="comsignupinset-inerform">
															<div className="form-group">
																<input type="text" className="form-control" id="" placeholder="Company (optional)" />
															</div>
														</div>
														<div className="comsignupinset-inerform">
															<div className="form-group">
																<input type="text" className="form-control" id="" placeholder="Apartment, Suite, etc, (optional)" />
															</div>
														</div>
														<div className="row">
															<div className="col-md-8">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<select className="js-example-basic-single" name="gender">
																			<option value="">City</option>
																			<option value="">City</option>
																			<option value="">City</option>
																		</select>
																	</div>
																</div>
															</div>
															<div className="col-md-4">
																<div className="comsignupinset-inerform">
																	<div className="form-group locationaddership">
																		<i class='bx bxs-map'></i>
																		<input type="text" className="form-control" id="" placeholder="Find Location" />
																	</div>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<select className="js-example-basic-single" name="gender">
																			<option value="">Select Country</option>
																			<option value="">Select Country</option>
																			<option value="">Select Country</option>
																		</select>
																	</div>
																</div>
															</div>
															<div className="col-md-4">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<select className="js-example-basic-single" name="gender">
																			<option value="">Select State</option>
																			<option value="">Select State</option>
																			<option value="">Select State</option>
																		</select>
																	</div>
																</div>
															</div>
															<div className="col-md-4">
																<div className="comsignupinset-inerform">
																	<div className="form-group">
																		<input type="text" className="form-control" id="" placeholder="ZIP Code" />
																	</div>
																</div>
															</div>
														</div>
														<div className="comsignupinset-inerform">
															<div className="form-group">
																<div className="sltmobileaninput">
																	<input type="text" className="form-control" id="" placeholder="Enter Mobile No" />
																	<select className="js-example-basic-single" name="gender">
																		<option value="">+973</option>
																		<option value="">+91</option>
																		<option value="">+92</option>
																		<option value="">+93</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="siginup-newlettbox">
															<div className="custom_checkbox">
																<label className="control control--checkbox">
																	<p>Save this information for next time</p>
																	<input type="checkbox" checked="checked" />
																	<div className="control__indicator"></div>
																</label>
															</div>
														</div>

													</div>
												</div>

												<div className="shpadderandmethod d-none">
													<div className="shipadderparttwoset-cov">
														<div className="shipadderparttwoset-iner righadder-borderst">
															<h4>Contact</h4>
															<p>Street:  2586 West Street</p>
															<p>City:  Wyoming</p>
															<p>State/province/area:   Michigan</p>
															<p>Phone number  616-717-8179</p>
															<p>Zip code  49509</p>
														</div>
														<div className="shipadderparttwoset-iner">
															<h4>Ship to</h4>
															<p>Street:  2586 West Street</p>
															<p>City:  Wyoming</p>
															<p>State/province/area:   Michigan</p>
															<p>Phone number  616-717-8179</p>
															<p>Zip code  49509</p>
														</div>
													</div>
													<div className="shipmethoddata-main">
														<div className="shipmethoddata-cov">
															<h3>Shipping Method</h3>
														</div>
														<div className="bhdlistdatchboxall-main">
															<div className="bhdlistdatchboxall-left">
																<div className="custom_checkbox">
																	<label className="control control--checkbox">
																		<input type="checkbox" checked="checked" />
																		<div className="control__indicator"></div>
																	</label>
																</div>
															</div>
															<div className="bhdlistdatchboxall-mid">
																<p>BHD 1</p>
															</div>
															<div className="bhdlistdatchboxall-right">
																<p>Aramex</p>
															</div>
														</div>
														<div className="bhdlistdatchboxall-main">
															<div className="bhdlistdatchboxall-left">
																<div className="custom_checkbox">
																	<label className="control control--checkbox">
																		<input type="checkbox" checked="checked" />
																		<div className="control__indicator"></div>
																	</label>
																</div>
															</div>
															<div className="bhdlistdatchboxall-mid">
																<p>BHD 1</p>
															</div>
															<div className="bhdlistdatchboxall-right">
																<p>SMSA EXPRESS</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<br />
										<input type="button" name="next" onClick={(e) => handleCheckoutContinue(e)} className="next action-button nxtprvbtnsetmaincov1" value="Continue to shipping" />
										{/* <!-- <input type="button" name="previous" className="previous action-button-previous" value="Previous" /> --> */}

										<div className="cotcoshop-albtncart">
											<a onClick={(e) => handleReturnToCart(e)} href="javascript:void(0);">Return to cart</a>
										</div>
									</fieldset>
								}

								{checkoutStep === 3 &&
									<fieldset>
										<div className="cartcheckotpage-cov">

											<div className="cartcheckotpage-right">
												<div className="orderSummary-box">
													<div className="ordsumm-title">
														<h3>Order Summary</h3>
													</div>
													<div className="ordsmrwithimgteprod_cov">
														<div className="ordsmrwithimgteprod_iner">
															<div className="ordsmrwithimgteprod_left">
															  <img src={ProductImage} alt="" />
																<h5>Smock Dress</h5>
																<p>Qty - 1</p>
															</div>
															<div className="ordsmrwithimgteprod_right">
																<p>$149.00</p>
															</div>
														</div>
														<div className="seemorbtnlinkcovcrt">
															<a href="#">See More</a>
														</div>
													</div>
													<div className="orderSumma-main1">

														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Shipping Charges</p>
															</div>
															<div className="ordSummain-right">
																<p>$20.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Tax</p>
															</div>
															<div className="ordSummain-right">
																<p>$2.00</p>
															</div>
														</div>
														<div className="orderSumma-maincov1">
															<div className="ordSummain-left">
																<p>Discount</p>
															</div>
															<div className="ordSummain-right">
																<p>$0.00</p>
															</div>
														</div>
													</div>
													<div className="sumertotal-cost">
														<div className="sumertotacost-left">
															<p>TOTAL COST</p>
														</div>
														<div className="sumertotacost-right">
															<p>$469.00</p>
														</div>
													</div>
													<div className="applydiscot-main">
														<h6>Apply Discount Code</h6>
														<div className="applydiscot-form">
															<input type="text" placeholder="Enter discount code" />
															<a href="javascript:void(0);">Apply</a>
														</div>
													</div>
												</div>
											</div>
											<div className="cartcheckotpage-left">
												<div className="cartcheckotpage-title">
													<h2>Payment Methods</h2>
												</div>
												<div className="paymentmetho-main">
													<h5>All transactions are secure and encrypted.</h5>
													<div className="paymentmetho-iner">
														<div className="accordion" id="paymentcarddata">
															<div className="accordion-item">
																<h2 className="accordion-header" id="checkmonyorder">
																	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#creditcartacod" aria-expanded="true" aria-controls="creditcartacod">
																		<span className="redbtnsetopt"></span>
																		Credit card
																	</button>
																</h2>
																<div id="creditcartacod" className="accordion-collapse collapse show" aria-labelledby="checkmonyorder" data-bs-parent="#paymentcarddata">
																	<div className="accordion-body pb-0">
																		<div className="cartpaymentdata-rcv">
																			<div className="form-group">
																				<input type="text" className="form-control" id="" placeholder="Card Number" />
																				{/* style="padding-right: 40px;" */}
																				<i class='bx bxs-lock'></i>
																			</div>
																			<div className="form-group">
																				<input type="text" className="form-control" id="" placeholder="Name Of Card" />
																			</div>
																			<div className="row">
																				<div className="col-md-6">
																					<div className="form-group">
																						<input type="text" className="form-control" id="" placeholder="Expiration date (MM / YY)" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="form-group">
																						<input type="text" className="form-control" id="" placeholder="Security code" />
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															{/* <!-- <div className="accordion-item">
												  	<h2 className="accordion-header" id="checkmonyorder">
														<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#checkmonyorderacod" aria-expanded="false" aria-controls="checkmonyorderacod">
															<span className="redbtnsetopt"></span>
															Check / Money order
														</button>
												  	</h2>
												  	<div id="checkmonyorderacod" className="accordion-collapse collapse" aria-labelledby="checkmonyorder" data-bs-parent="#paymentcarddata">
														<div className="accordion-body">
															
														</div>
												  	</div>
												</div> --> */}
														</div>
														<div className="plans">
															<label className="plan basic-plan" for="basic">
																<input type="radio" name="plan" id="basic" />
																<div className="plan-content">
																	<div className="plan-details">
																		<p>Check / Money order</p>
																	</div>
																</div>
															</label>
															<label className="plan complete-plan" for="complete">
																<input type="radio" id="complete" name="plan" />
																<div className="plan-content">
																	<div className="plan-details">
																		<p>Cash on delivery</p>
																	</div>
																</div>
															</label>
														</div>
													</div>
												</div>
												<div className="billinadderdata-cov">
													<h5>Billing address</h5>
													<div className="custom_checkbox">
														<label className="control control--checkbox">
															<p>Same as shipping address</p>
															<input type="checkbox" checked="checked" />
															<div className="control__indicator"></div>
														</label>
													</div>
													<div className="custom_checkbox">
														<label className="control control--checkbox">
															<p>Use a different billing address</p>
															<input type="checkbox" checked="checked" />
															<div className="control__indicator"></div>
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- <input type="button" name="next" className="next action-button nxtprvbtnsetmaincov1" value="Pay Now" /> --> */}
										<div className="cotcoshop-albtncart">
											<button onClick={() => handlePaynow()} >Pay Now</button>
											<a onClick={(e) => handleReturnToShipping(e)} href="javascript:void(0);">Return to shipping</a>
										</div>
										{/* <!-- <input type="button" name="previous" className="previous action-button-previous" value="Previous" /> --> */}
									</fieldset>
								}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CheckoutPage;