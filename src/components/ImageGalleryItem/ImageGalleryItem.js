import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styles';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    isOpenModal: false,
  };

  openModal = e => {
    if (e.target.nodeName === 'IMG') {
      this.setState({ isOpenModal: true });
      document.querySelector('html').style.overflow = 'hidden';
    }
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
    document.querySelector('html').style.overflow = null;
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isOpenModal } = this.state;

    return (
      <Item onClick={this.openModal}>
        <Image src={webformatURL} alt={tags} />
        {isOpenModal && (
          <Modal
            image={largeImageURL}
            description={tags}
            onClose={this.closeModal}
          />
        )}
      </Item>
    );
  }
}
