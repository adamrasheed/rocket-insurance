import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants'

import * as style from './style.module.css'

const Header = ({ extended }) => {
  const headerClass = cn(style.header, extended && style.extended)

  return (
    <header className={headerClass}>
      <div className="container">
        <h1 className={style.title}>
          <Link to={PATHS.LANDING} title="Home Page">
            <span role="img" aria-label="rocket">🚀</span> Rocket Insurance
          </Link>
        </h1>
        <p className={style.subtitle}>
          Flying into orbit it hard enough; you shouldn't have to worry about financial burdens should something happen.
        </p>
      </div>
    </header>
  );
}

export default Header;