import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '../Tooltip/Tooltip'
import './Label.css'
// ----------------------------------------------------------------------

Label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool
}

export default function Label ({ hint, label, required = false, className = '', htmlFor = null }) {
  return (
    <div className={`label-wrap ${className}`}>
      <label htmlFor={htmlFor}>
        <span>{label}</span>
        {required && <span className='required'></span>}
      </label>
      {hint && <Tooltip>{hint}</Tooltip>}
    </div>
  )
}
