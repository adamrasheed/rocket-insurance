import React, { useContext } from 'react';
import { SiteContext } from '../store/SiteContext';
import Header from '../components/Header'
import PolicySummary from '../components/PolicySummary/index';
import PolicyUpdate from '../components/PolicyUpdate';

const Quote = () => {
  const { state: { quote } } = useContext(SiteContext)
  const greeting = `${quote ?.policy_holder ?.first_name}, here's your policy information`

  return (
    <>
      <Header />
      {quote && (
        <div className="page-content">
          <h2 className="center title">{greeting}</h2>
          <PolicySummary
            name={quote ?.policy_holder}
            address={quote ?.rating_address}
            premium={quote ?.premium}
            policy={quote ?.variable_selections}
          />
          <PolicyUpdate
            options={quote ?.variable_options}
          />
        </div>
      )}
    </>
  );
}

export default Quote;