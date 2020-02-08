import React from 'react';
import { Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <header className="header">
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