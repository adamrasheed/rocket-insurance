import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <h1 className="center">404: Page not found</h1>
      <Link to="/" className="button block center">Go Back Home</Link>
    </>
  );
}

export default NotFoundPage;