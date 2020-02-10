import React from 'react';
import { Link } from 'react-router-dom'
import { PATHS } from '../constants';

const Back = () => {
  return (
    <div className="card">
      <p>Please go back and submit your information</p>
      <Link className="button block center" to={PATHS.LANDING}>Go Back</Link>
    </div>
  );
}

export default Back;