import PropTypes from 'prop-types';
import PreLoader from '../PreLoader';
import { LoaderContainer } from './style';

const Loader = ({ iconSize }) => {
  return (
    <LoaderContainer>
      <PreLoader
        size={iconSize}
        strokeWidth='3'
      />
    </LoaderContainer>
  )
};

Loader.propTypes = {
  iconSize: PropTypes.string,
}

Loader.defaultProps = {
  iconSize: '50px',
};

export default Loader;
