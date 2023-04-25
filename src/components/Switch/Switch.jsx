import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './Switch.css'
// ----------------------------------------------------------------------

Switch.propTypes = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
export default function Switch ({
  className = '',
  label,
  tooltip,
  hint,
  field,
  required,
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-switch form-group ${className} ${status}`}>
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
        tooltip={tooltip}
        htmlFor={field.name}
        required={required}
      />
      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
