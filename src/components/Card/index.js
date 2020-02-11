import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import * as style from './style.module.css'

const Card = ({
  title,
  titleSmall,
  className,
  children
}) => {
  const titleClass = cn(
    style.title,
    titleSmall && style.small
  )

  const Title = titleSmall ? (
    <h3 className={titleClass}>{title}</h3>
  ) : (
      <h2 className={titleClass}>{title}</h2>
    )
  return (
    <div className={style.card}>
      {title && Title}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  titleSmall: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Card;