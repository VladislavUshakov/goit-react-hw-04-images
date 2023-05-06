import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styles';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    imageCollection: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.imageCollection !== this.props.imageCollection &&
      this.props.imageCollection.length > 12
    ) {
      this.autoScroll();
    }
  };

  autoScroll = () => {
    const cardHeight =
      document.querySelector('ul').firstElementChild?.scrollHeight;

    if (cardHeight) {
      window.scrollBy({
        top: cardHeight * 3,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { imageCollection } = this.props;
    return (
      <List>
        {imageCollection.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </List>
    );
  }
}
