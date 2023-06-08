import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FieldGroup.css'

// ----------------------------------------------------------------------
FieldGroup.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node
}

FieldGroup.defaultProps = {
  required: false,
  disabled: false,
  error: false
}

export default function FieldGroup ({ className, required, disabled, error, children }) {
  const status = [className, { required }, { disabled }, { error }]
  return (
    <div className={classNames('field-group', status)}>
      {children}
    </div>
  )
}
