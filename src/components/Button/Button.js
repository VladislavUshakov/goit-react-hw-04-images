import { LoadMoreBtn } from './Button.styles';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
