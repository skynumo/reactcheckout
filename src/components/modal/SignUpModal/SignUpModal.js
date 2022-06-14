
import React from "react";
import SignupImageSrc from '../../../_assets/images/login-img2.png';
// import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { hideSignUpModal, showSignUpModal } from "../../../_actions/authModalActions";

const SignUpModal = (props) => {

  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModal)

  const closeModal = () => {
    if (authModal.showSignupModal) {
      dispatch(hideSignUpModal())
    } else {
      dispatch(showSignUpModal())
    }
  }

  return <>
    {authModal.showSignupModal && <div className="modal-backdrop fade show" onClick={() => closeModal()}></div>}
    {authModal.showSignupModal && <div className="modal fade signgiupmodalset-cov d-block show" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="signinsignup-main">
              <div className="signinsignup-left">
                <img src={SignupImageSrc} alt="Login" />
              </div>
              <div className="signinsignup-right">
                <button type="button" className="btn-close" onClick={() => closeModal()}></button>
                <h3>CREATE NEW ACCOUNT</h3>
                <div className="comsignupinsetcov">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="comsignupinset-inerform">
                        <div className="form-group">
                          <label for="">First Name</label>
                          <input type="text" className="form-control" id="" placeholder="Enter First name" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="comsignupinset-inerform">
                        <div className="form-group">
                          <label for="">Last Name</label>
                          <input type="text" className="form-control" id="" placeholder="Enter Last name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comsignupinset-inerform">
                    <div className="form-group">
                      <label for="">Email</label>
                      <input type="text" className="form-control" id="" placeholder="Enter Email Address" />
                    </div>
                  </div>
                  <div className="siginup-newlettbox">
                    <div className="custom_checkbox">
                      <label className="control control--checkbox">
                        <p>Sign Up for Newsletter</p>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="comsignupinset-inerform">
                        <div className="form-group formdatamiancov">
                          <label for="">Date of birth</label>
                          <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                            <input className="form-control" type="text" placeholder="Select Date" readonly />
                            <span className="input-group-addon"><i className='bx bx-calendar'></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="comsignupinset-inerform">
                        <div className="form-group">
                          <label for="">Gender</label>
                          <select className="js-example-basic-single form-control" name="gender">
                            <option value="">Male</option>
                            <option value="">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comsignupinset-inerform">
                    <div className="form-group">
                      <label for="">Mobile No</label>
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
                  <div className="comsignupinset-inerform">
                    <div className="form-group">
                      <label for="">OTP</label>
                      <input type="password" className="form-control" id="" placeholder="Enter OTP" />
                    </div>
                  </div>
                  <div className="comsignupinset-inerform">
                    <div className="form-group">
                      <label for="">Password</label>
                      <input type="password" className="form-control" id="" placeholder="Enter Password" />
                    </div>
                  </div>
                  <div className="siginup-newlettbox">
                    <div className="custom_checkbox">
                      <label className="control control--checkbox">
                        <p>By using this form you agree with the storage
                          and handling of your data by this website.</p>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label>
                    </div>
                  </div>


                  <div className="login-btnsetcov">
                    <button>Login</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  </>
}
export default SignUpModal;