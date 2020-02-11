import React from 'react';
import PropTypes from 'prop-types'
import { moneyFormatter } from '../../../helpers';

import * as style from './style.module.css'

const PolicyOption = ({ title, description, values }) => {
  return (
    <div className={style.policy}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <select name={title} className={style.select}>
        {values.map(value => (
          <option
            key={value}
            value={value}>
            {moneyFormatter.format(value)}
          </option>
        ))}
      </select>
    </div>
  );
}

PolicyOption.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  values: PropTypes.array,
}

export default PolicyOption;