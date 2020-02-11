import React from 'react';
import Card from '../Card';
import { moneyFormatter } from '../../helpers';
import PolicyOption from './PolicyOption';

const PolicyUpdate = ({ options }) => {
  return options && (
    <Card title="Update Your Policy Options">
      <form className="two">
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
      </form>
    </Card>
  );
}

export default PolicyUpdate;