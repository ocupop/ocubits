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
  children: PropTypes.node
}

export default function Label ({ hint, label, children, className = '', htmlFor = null }) {
  return (
    <div className={`label-wrap ${className}`}>
      <label htmlFor={htmlFor}>
        <span>{label}</span>
        {children}
      </label>
      {hint && <Tooltip>{hint}</Tooltip>}
    </div>
  )
}
