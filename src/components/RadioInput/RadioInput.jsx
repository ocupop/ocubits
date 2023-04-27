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
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
RadioInput.defaultProps = {
  required: false,
  disabled: false
}

function encodeAttr (text) {
  return text == undefined ? '' : text.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
}

export default function RadioInput ({
  className = '',
  label,
  value,
  tooltip,
  hint,
  field,
  required,
  disabled,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''

  return (
    <div className={`ocufield ocu-radio form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <input
        type='radio'
        id={`${field.name}-${encodeAttr(value)}`}
        {...field}
        value={value}
        required={required}
        disabled={disabled}
      />
      <div>
        <Label label={label} tooltip={tooltip} htmlFor={`${field.name}-${encodeAttr(value)}`} required={required}/>
        {hint && <div className='helper'>{hint}</div>}
      </div>
    </div>
  )
}
