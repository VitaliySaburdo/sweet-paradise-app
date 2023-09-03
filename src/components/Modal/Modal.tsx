import { createPortal } from 'react-dom';
import { Overlay, ModalBody } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

type ModalProps = {
  onClick: () => void; 
  children: React.ReactNode; 
};

export const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
return modalRoot
  ? createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalBody>{children}</ModalBody>
      </Overlay>,
      modalRoot
    )
  : null;
};

