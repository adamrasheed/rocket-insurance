import React from 'react';
import cn from 'classnames'

import * as style from './style.module.css'

const InputGroup = ({
  onChange,
  type = "text",
  label,
  labelClassName,
  id,
  className,
  children,
  ...props
}) => {
  const groupClass = cn(style.group, className)
  return (
    <div className={groupClass}>
      {label && (
        <label
          className={style.label}
          htmlFor={id}>
          {label}
        </label>
      )}
      {children ? children : (
        <input
          type={type}
          className={style.input}
          id={id}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
}

export default InputGroup;