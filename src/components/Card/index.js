import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import * as style from './style.module.css'

const Card = ({
  title,
  transparent,
  className,
  children
}) => {

  const cardClass = cn(
    style.card,
    transparent && style.transparent
  )

  function renderTitle() {
    return title ? (
      <h2 className={style.title}>{title}</h2>
    ) : null
  }
  return (
    <div className={cardClass}>
      {renderTitle()}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Card;