import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import Label from '../Label/Label'
import './RadioInput.css'
// ----------------------------------------------------------------------

RadioInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

export default function RadioInput ({
  className = '',
  label,
  tooltip,
  hint,
  field,
  required,
  value,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''

  return (
    <div className={`ocufield ocu-radio form-group ${className} ${status}`}>
      <input
        type='radio'
        id={`${field.name}-${value}`}
        {...field}
        value={value}
        required={required}
      />
      <div>
        <Label label={label} tooltip={tooltip} htmlFor={`${field.name}-${value}`} required={required}/>
        {hint && <div className='helper'>{hint}</div>}
      </div>
    </div>
  )
}
