import React from 'react';
import PropTypes from 'prop-types';
import { FiLoader as LoaderIcon } from 'react-icons/fi';
import { LoaderWrapper } from './style';

const PreLoader = ({ size, title, customStyle, containerStyle, margin, color, ...props }) => {
  return (
    <LoaderWrapper m={margin} style={containerStyle}>
      <LoaderIcon
        className='spinner'
        title={title}
        color={color}
        size={size}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "2"}
        style={customStyle}
        {...props}
      />
    </LoaderWrapper>
  )
};

PreLoader.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  customStyle: PropTypes.object,
  color: PropTypes.string
};

PreLoader.defaultProps = {
  size: '25px',
  title: 'Loading...',
  customStyle: {},
  color: '#007CFF'
};

export default PreLoader;
