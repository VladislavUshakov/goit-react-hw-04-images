import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Content, Overlay } from './Modal.styles';

export const Modal = ({ image, description, onClose }) => {
  useEffect(() => {
    const closeModalForEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeModalForEsc);
    return () => {
      document.removeEventListener('keydown', closeModalForEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content>
        <img src={image} alt={description} />
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
