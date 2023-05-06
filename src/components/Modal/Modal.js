import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Content, Overlay } from './Modal.styles';

export class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.closeModalForEsc);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.closeModalForEsc);
  };

  closeModalForEsc = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, description, onClose } = this.props;
    return ReactDOM.createPortal(
      <Overlay onClick={onClose}>
        <Content>
          <img src={image} alt={description} />
        </Content>
      </Overlay>,
      document.getElementById('modal-root')
    );
  }
}
