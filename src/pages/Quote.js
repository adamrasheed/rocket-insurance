import React, { useContext } from 'react';
import Header from '../components/Header'
import { SiteContext } from '../context/SiteContext';
import Back from '../components/Back';

const Quote = () => {
  const { quote } = useContext(SiteContext)
  console.log(quote)
  return (
    <div>
      <Header />
      {quote ? (<p>hello</p>) : (
        <Back />
      )}
    </div>
  );
}

export default Quote;