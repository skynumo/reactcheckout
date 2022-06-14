import React from 'react';
import './OnlineOfflineAlert.scss';

const OnlineOfflineAlert = (props) => {

  const isOnline = navigator.onLine;

  return (
    <React.Fragment>
      {
       !isOnline && 
        <div className="alert alert-danger offline-alert" role="alert">
            Your are offline.
        </div>
      }
    </React.Fragment>
  )
}

export default OnlineOfflineAlert;