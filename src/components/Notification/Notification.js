import React from 'react';
import { NotificationManager } from 'react-notifications';

const Notification = ( props ) => {
  const { type, msgText, msgTitle } = props;

  render() {
    return (
      <div>
        {(() => {
        switch (type) {
          case 'info':
            NotificationManager.info( { msgText }, { msgTitle }, 5000 );
            break;
          case 'success':
            NotificationManager.success( { msgText }, { msgTitle }, 5000 );
            break;
          case 'warning':
            NotificationManager.warning( { msgText }, { msgTitle }, 5000 );
            break;
          case 'error':
            NotificationManager.error( { msgText }, { msgTitle }, 5000 );
            break;
          }
        })()}
      </div>
    );
  }
}

export default Notification;
