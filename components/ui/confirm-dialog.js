import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export function confirmDialog(callback,title,message) {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: 'Yes',
          onClick: () => callback()
        },
        {
          label: 'No',
          //onClick: () => console.log('NO')
        }
      ],
      overlayClassName: "no-overlay",
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>{title}</h1>
            <p>{message}</p>
            <button className='btn btn-disabled' onClick={onClose}>No</button>
            <button className='btn btn-delete' onClick={() => {
                callback()
                onClose();
              }}
            >
              Yes, Delete user!
            </button>
          </div>
        );
      }
    });
  }