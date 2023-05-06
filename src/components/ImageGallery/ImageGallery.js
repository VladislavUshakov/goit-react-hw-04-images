import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styles';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imageCollection }) => {
  const cardRef = useRef();
  const collectionLength = imageCollection.length;

  const autoScroll = () => {
    const cardHeight = cardRef.current.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 3,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (collectionLength > 12) {
      autoScroll();
    }
  }, [collectionLength]);

  return (
    <List>
      {imageCollection.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          ref={cardRef}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  imageCollection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
