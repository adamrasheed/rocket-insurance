import React from 'react';
import Card from '../Card';
import PolicyOption from './PolicyOption';

const PolicyUpdate = ({ options }) => {
  return (
    <Card title="Update Your Policy Options">
      <form className="two">
        {options && Object.keys(options).map(key => {
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