import React from 'react';
import { useDialog } from './hooks/useDialog';

export default function DialogsContainer() {
  const { showDialog, closeDialog } = useDialog();

  const billionsContent = (
    <div>
      <p>Details about the TV show 'Billions'.</p>
      <img src='https://images.thedirect.com/media/article_full/billions.jpg' width='500px' height='250px' />
    </div>
  )

  const openDeleteTeamModal = () => {
    showDialog({
      content: <p>Are you sure you want to remove this team?</p>,
      actions: [
        { 
          label: 'No',
          onClick: () => {
            console.log('Cancelled');
            closeDialog();
          },
          style: {
            background: 'white',
            border: '1px solid white',
            borderRadius: '5px',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer'
          }
        },
        {
          label: 'Yes',
          onClick: () => {
            console.log('Confirmed');
            closeDialog();
          },
          style: {
            background: 'lightgrey',
            border: '1px solid lightgrey',
            borderRadius: '5px',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer'
          }
        },
      ],
      isModal: true
    });
  };

  const openBillionsInfoDialog = () => {
    showDialog({
      title: 'Billions',
      content: billionsContent,
      shouldDisplayCloseX: true
    });
  };

  return (
    <div>
      <button className='action' onClick={openDeleteTeamModal}>Delete Team</button>
      <button className='action' onClick={openBillionsInfoDialog}>Show Billions Info</button>
    </div>
  );
};