import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Label.css'
// ----------------------------------------------------------------------

Label.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  fieldName: PropTypes.string
}

export default function Label ({ label, className, fieldName }) {
  if (!label) return null
  return (
    <label htmlFor={fieldName} className={classNames('field-label', className)}>
      <span>{label}</span>
    </label>
  )
}
