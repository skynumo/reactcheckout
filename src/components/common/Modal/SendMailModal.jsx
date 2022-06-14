import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { postLog } from "../../../../_apis/api";
import { toast } from "react-toastify";
const apiURL2 = process.env.REACT_APP_API_URL2;

const SendMailModal = (props) => {

  const dispatch = useDispatch();
  const COMPANY_DATA = useSelector((state) => state.COMPANY_DATA);
  const SALES_SETTINGS = useSelector( (state) => state.SALES_SETTINGS );
  const companyDetails = COMPANY_DATA.companyDetails;
  const company = COMPANY_DATA.company;
  const requestData = {
    company: company.id,
    year: company.year.toString(),
  };

  const modalTitle = props.modalTitle ? props.modalTitle : "Send Email";
  const modalContent = props.modalContent ? props.modalContent : "Lorem add a column on the right called.";
  const successMessage = props.successMsg ? props.successMsg : "Email sent succesfully!";
  let errorMessage = props.successMsg ? props.successMsg : "Email not sent!";
  const logType = props.logType ? props.logType : "editSalesLog";
  
  const mailParams = {
    from: props?.mailFrom ? props?.mailFrom?.trim() : companyDetails?.emailAddress?.trim(),
    to: props?.mailTo?.trim(),
    subject: props?.mailSubject ? props?.mailSubject?.trim() : SALES_SETTINGS?.salesEmailSettings?.subject?.trim(),
    mailType: props.mailType ? props.mailType : 'html',
    content: props.mailContent ? props?.mailContent?.trim() : SALES_SETTINGS?.salesEmailSettings?.emailBody?.trim(),
    file: props?.attachments,
  }

  const [isMailSent, setIsMailSent] = useState(false);
  const [show, setShow] = useState(false);
  const [showMailSend, setShowMailSend] = useState(true);
  const [errorResponse, setErrorResponse] = useState(null);
  
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);

    setTimeout(() => {
      setIsMailSent(false);
      setShowMailSend(true);
    }, 1000)
  };
 
  const handleSendMail = (data) => {

    let isValid = true;

    if (!data.from) {
      toast.error('Email: "From" is required.');
      isValid = false;
      return;
    }

    if (!data.to) {
      toast.error('Email: "To" is required.')
      isValid = false;
      return;
    }

    if (!data.subject) {
      toast.error('Email: "Subject" is required.')
      isValid = false;
      return;
    }

    if (!data.content) {
      toast.error('Email: "Content" is required.')
      isValid = false;
      return;
    }

    // Send Mail API
    if (isValid) {
      axios
      .post(`${apiURL2}/settings/send-email`, data)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status ==='success') {
            setIsMailSent(true); // Mail sent success.

            // Set log
            dispatch(
              postLog({
                action: 'Mail Sent.',
                fieldChanged: JSON.stringify(data),
                type: logType,
              }, requestData), 
            )
          } else {
            setIsMailSent(false); // Mail sent failed.
            
            // Set log
            dispatch(
              postLog({
                action: 'Mail Send Fail.',
                fieldChanged: JSON.stringify(data),
                type: logType,
              }, requestData), 
            )
          }
        }
        setShowMailSend(false);
      })
      .catch((error) => {
        setErrorResponse(error?.response?.data)
        setIsMailSent(false); // Mail sent failed.
        setShowMailSend(false);

        // Set log
        dispatch(
          postLog({
            action: 'Mail Send Fail.',
            fieldChanged: JSON.stringify(data),
            type: logType,
          }, requestData), 
        )
      });
    }
  }

  return (
    <React.Fragment>

      <Button onClick={handleShow} type='button'>
        { props.btnLabel ? props.btnLabel : "Send Email" }
      </Button>

      <Modal className="themeModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ modalTitle }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { showMailSend && modalContent }

          {!mailParams.from && <div className="text-danger">
            <div className="text-danger">Error: "From" email not found.</div>
          </div>} 

          {!mailParams.to && <div className="text-danger">
            <div className="text-danger">Error: "To" email not found.</div>
          </div>} 
         
          { !showMailSend && isMailSent && 
          <div className="text-success">{successMessage}</div>
          }
          { !showMailSend && !isMailSent &&
          <div className="text-danger">
            <p>{errorMessage}</p>
            <pre>{JSON.stringify(errorResponse)}</pre>
          </div>
          }

        </Modal.Body>
        { showMailSend ?
          <Modal.Footer>
            <Button variant="outline-primary" onClick={ () => handleClose() }>Close</Button>
            <Button variant="primary" onClick={ () => handleSendMail(mailParams) } >Send</Button>
          </Modal.Footer> 
          :
          <Modal.Footer>
            <Button onClick={ () => handleClose() }>Ok</Button>
          </Modal.Footer> 
        }
      </Modal>
    </React.Fragment>
  );
};

export default SendMailModal;
