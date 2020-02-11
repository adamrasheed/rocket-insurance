import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import Header from '../components/Header'
import Back from '../components/Back';
import PolicySummary from '../components/PolicySummary/index';
import PolicyUpdate from '../components/PolicyUpdate';

const Quote = () => {
  const { quote } = useContext(SiteContext)
  console.log(quote)
  const greeting = `${quote ?.policy_holder ?.first_name}, here's your policy information`

  return (
    <div>
      <Header />
      {quote ? (
        <div className="page-content">
          <h2 className="title">{greeting}</h2>
          <PolicySummary
            name={quote.policy_holder}
            address={quote.rating_address}
            policy={quote.variable_selections}
          />
          <PolicyUpdate
            options={quote.variable_options}
          />
        </div>
      ) : (
          <Back />
        )}
    </div>
  );
}

export default Quote;