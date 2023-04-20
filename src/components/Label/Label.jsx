import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '../Tooltip/Tooltip'
import './Label.css'
// ----------------------------------------------------------------------

Label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool
}

export default function Label ({ hint, label, required = false, className = '', htmlFor = null }) {
  return (
    <div className={`label-wrap ${className} ${required && 'required'}`}>
      <label htmlFor={htmlFor} >
        {label}
      </label>
      {hint && <Tooltip>{hint}</Tooltip>}
    </div>
  )
}
