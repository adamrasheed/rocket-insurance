import React from 'react';
import Card from '../Card';
import { moneyFormatter } from '../../helpers';
import PolicyOption from './PolicyOption';

// title: "Deductible"
// description: "The amount of money you will pay in an insurance claim before the insurance coverage kicks in."
// values: (3) [500, 1000, 2000]

const PolicyUpdate = ({ options }) => {
  return (
    <Card title="Policy Update">
      <div className="two">
        {Object.keys(options).map(key => {
          const option = options[key]
          return (
            <PolicyOption
              key={option.title}
              title={option.title}
              description={option.description}
              values={option.values}
            />
          )
        })}
      </div>
    </Card>
  );
}

export default PolicyUpdate;