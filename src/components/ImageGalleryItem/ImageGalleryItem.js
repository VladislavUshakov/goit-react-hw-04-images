import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styles';
import { Modal } from 'components/Modal';

export const ImageGalleryItem = forwardRef(
  ({ webformatURL, largeImageURL, tags }, ref) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = e => {
      if (e.target.nodeName === 'IMG') {
        setIsOpenModal(true);
        document.querySelector('html').style.overflow = 'hidden';
      }
    };

    const closeModal = () => {
      setIsOpenModal(false);
      document.querySelector('html').style.overflow = null;
    };

    return (
      <Item onClick={openModal} ref={ref}>
        <Image src={webformatURL} alt={tags} />
        {isOpenModal && (
          <Modal
            image={largeImageURL}
            description={tags}
            onClose={closeModal}
          />
        )}
      </Item>
    );
  }
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
