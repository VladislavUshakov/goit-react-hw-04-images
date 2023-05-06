import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ visible }) => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#3f51b5"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      justifyContent: 'center',
    }}
    visible={visible}
  />
);

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
