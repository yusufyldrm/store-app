import PropTypes from 'prop-types';
import PreLoader from '../PreLoader';
import { Wrapper } from './style';

const Button = ({
  title,
  icon: Icon,
  iconProps,
  isLoading,
  children,
  textColor,
  ...props
}) => {
  return (
    <Wrapper
      disabled={isLoading}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.02,
        transition: {
          type: 'spring',
          duration: 1,
          stiffness: 100
        },
      }}
      $textColor={textColor}
      {...props}
    >
      {isLoading ? <PreLoader /> : (children ? children : <p>{title}</p>)}
      {Icon && <Icon {...iconProps} />}
    </Wrapper>
  )
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  isLoading: PropTypes.bool,
  bg: PropTypes.string,
  radius: PropTypes.number,
  pd: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  title: '',
  icon: null,
  iconProps: {},
  isLoading: false,
  bg: '#fff',
  radius: 10,
  pd: '15px',
  textColor: '#212121',
  children: null
};

export default Button