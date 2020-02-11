import React from 'react';
import cn from 'classnames'
import PropTypes from 'prop-types'

import * as style from './style.module.css'
import { spaceCase } from '../../helpers';

const InputGroup = ({
  onChange,
  type = "text",
  label,
  labelClassName,
  id,
  name,
  error,
  className,
  children,
  required,
  value,
  ...props
}) => {
  const groupClass = cn(style.group, className)

  return (
    <div className={groupClass}>
      {label && (
        <label
          className={cn(style.label, error && style.error)}
          htmlFor={id}>
          {label}{required && `*`}
        </label>
      )}
      {children ? children : (
        <input
          type={type}
          className={cn(style.input, error && style.error)}
          id={id}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          {...props}
        />
      )}
      {error && (
        <p className={style.error_display}>{spaceCase(error)}</p>
      )}
    </div>
  );
}

InputGroup.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  value: PropTypes.string,
}

export default InputGroup;