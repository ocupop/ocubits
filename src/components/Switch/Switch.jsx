import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './Switch.css'
// ----------------------------------------------------------------------

Switch.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
export default function Switch ({
  className = '',
  label,
  hint,
  field,
  required,
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : 'invalid'
  return (
    <div className={`form-group ocu-switch ${className} ${status}`}>
      <input
        {...field}
        className={'form-input'}
        type="checkbox"
        role="switch"
        name={field.name}
        id={field.name}
      />
      <Label
        label={label}
        hint={hint}
        htmlFor={field.name}
        required={required}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
