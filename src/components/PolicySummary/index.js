import React from 'react'
import PropTypes from 'prop-types'
import { moneyFormatter } from '../../helpers'
import InfoItem from '../InfoItem/index'
import Card from '../Card'


const PolicySummary = ({
  name,
  address,
  policy: {
    deductible,
    asteroid_collision,
  }
}) => {
  const formattedAddress =
    `${address.line_1} ${address.city} ${address.region.toUpperCase()}, ${address.postal}`

  return (
    <Card transparent>
      <div className="two">
        <InfoItem
          title="Name"
          info={`${name.first_name} ${name.last_name} `} />
        <InfoItem
          title="Address"
          info={formattedAddress} />
        <InfoItem
          title="Deductible"
          info={moneyFormatter.format(deductible)} />
        <InfoItem
          title="Asteroid Collision"
          info={moneyFormatter.format(
            asteroid_collision
          )} />
      </div>
    </Card>
  );
}

PolicySummary.propTypes = {
  name: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
  address: PropTypes.shape({
    line: PropTypes.string,
    line2: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    postal: PropTypes.string,
    line_1: PropTypes.string,
  }).isRequired,
  policy: PropTypes.shape({
    deductible: PropTypes.number,
    asteroid_collision: PropTypes.number,
  })
}

export default PolicySummary;