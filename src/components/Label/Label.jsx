import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '../Tooltip/Tooltip'
import './Label.css'
// ----------------------------------------------------------------------

Label.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool
}

export default function Label ({ tooltip, label, required = false, className = '', htmlFor = null }) {
  if (!label) return
  return (
    <div className={`label-wrap ${className} ${required && 'required'}`}>
      <label htmlFor={htmlFor} >
        {label}
      </label>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </div>
  )
}
