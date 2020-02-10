import React from 'react';
import cn from 'classnames'
import { Container } from 'semantic-ui-react';

const Header = ({ extended }) => {
  const headerClass = cn('header', extended && 'extended')
  return (
    <header className={headerClass}>
      <Container text textAlign="center">
        <h1 className="title"><span role="img" aria-label="rocket">🚀</span> Rocket Insurance</h1>
        <p className="subtitle">
          Flying into orbit it hard enough; you shouldn't have to worry about financial burdens should something happen.
        </p>
      </Container>
    </header>
  );
}

export default Header;