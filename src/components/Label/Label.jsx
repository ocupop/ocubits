import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '../Tooltip/Tooltip'
// ----------------------------------------------------------------------

Label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default function Label ({ hint, label, children, className }) {
  return (
    <div className={`flex relative ${className}`}>
      <label>
        <span className="whitespace-nowrap">{label}</span>
        {children}
      </label>
      {hint && <Tooltip>{hint}</Tooltip>}
    </div>
  )
}

// {hint && <Tooltip className='' placement='bottom' triggerType='hover' unstyled={false}>{hint}</Tooltip>}
