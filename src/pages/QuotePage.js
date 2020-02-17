import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from '../components/Header'
import PolicySummary from '../components/PolicySummary/index';
import PolicyUpdate from '../components/PolicyUpdate';
import { PATHS } from '../constants/constants';

const QuotePage = () => {
  const quote = useSelector(state => state.quote)

  function renderGreeting() {
    return quote ?.policy_holder && (
      <h2 className="center title">
        {`${quote.policy_holder.first_name}, here's your policy information`}
      </h2>
    )
  }

  return Object.entries(quote).length ? (
    <>
      <Header />
      <div className="page-content">
        {renderGreeting()}
        <PolicySummary
          name={quote.policy_holder}
          address={quote.rating_address}
          premium={quote.premium}
          policy={quote.variable_selections}
        />
        <PolicyUpdate
          options={quote.variable_options}
        />
      </div>
    </>
  ) : (<Redirect to={PATHS.LANDING} />);
}

export default QuotePage;