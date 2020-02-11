import React from 'react'
import PropTypes from 'prop-types'

import * as style from './style.module.css'

const InfoItem = ({ title, info, className, children }) => {
  return (
    <div className={className}>
      <p className={style.title}>{title}</p>
      <p className={style.info}>
        {info || children}
      </p>
    </div>
  );
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.node,
  children: PropTypes.node
}
export default InfoItem;