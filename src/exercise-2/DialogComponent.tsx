import React, { useEffect, useMemo, useRef } from 'react';
import { DialogConfig } from './iterfaces/Dialog';

interface DialogProps extends DialogConfig{
  onClose: () => void;
  isOpen: boolean;
}

export default function DialogComponent({
  title,
  content,
  actions,
  onClose,
  shouldDisplayCloseButton,
  shouldDisplayCloseX,
  isModal,
  isOpen
}: DialogProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const dialog = useMemo(() => (
    <div className='dialog'>
      {title && (
        <div className='dialog-header'>
          <h4>{title}</h4>
          {shouldDisplayCloseX && <button id='close-icon' onClick={onClose}>X</button>}
        </div>
      )}

      <div className='dialog-body'>
        {content}
      </div>

      <div className='dialog-footer'>
        {actions?.map((action, index) => (
          <button key={index} onClick={action.onClick} style={action.style}>
            {action.label}
          </button>
        ))}

        {!actions && shouldDisplayCloseButton && <button onClick={onClose}>Close</button>}
      </div>
    </div>
  ), [title, content, actions, shouldDisplayCloseX, shouldDisplayCloseButton, onClose]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModal && isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModal, isOpen]);

  return isModal ? (
    <dialog className='dialog-overlay' ref={modalRef}>
      {dialog}
    </dialog>
  ): (
    <div className='dialog-overlay'>
      {dialog}
    </div>
  );
};
