import { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Input,
  Label,
  ErrorText,
  IconContainer
} from './style';

const TextInput = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  required,
  disabled,
  containerStyle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightIconClick,
  isResponsive,
  ...props
}) => {
  const inputRef = createRef();
  const [isFocused, setFocus] = useState(false);

  return (
    <Wrapper style={containerStyle} $responsive={isResponsive}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className='w-input-icon'>
        {LeftIcon
          &&
          <IconContainer $isLeft={true} onClick={() => inputRef.current.focus()} >
            <LeftIcon />
          </IconContainer>
        }
        <Input
          id={id}
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={(e) => { onBlur?.(e); setFocus(false); }}
          onFocus={(e) => { onFocus?.(e); setFocus(true); }}
          required={required}
          disabled={disabled}
          $error={!!error}
          $hasLeftIcon={!!LeftIcon}
          $hasRightIcon={!!RightIcon}
          $responsive={isResponsive}
          {...props}
        />
        {RightIcon
          &&
          <IconContainer $isLeft={false} onClick={() => { rightIconClick?.() }} $isFocused={isFocused} $responsive={isResponsive}>
            <RightIcon />
          </IconContainer>
        }
      </div>
      {error && <ErrorText>*{error}</ErrorText>}
    </Wrapper>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.object,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  value: '',
  onBlur: () => { },
  onFocus: () => { },
  required: false,
  disabled: false,
  containerStyle: {},
};

export default TextInput;
