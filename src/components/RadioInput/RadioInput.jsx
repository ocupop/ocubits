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
  selectedValue: PropTypes.string,
  allowDeselect: PropTypes.bool,
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
  selectedValue,
  allowDeselect = false,
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const handleOnChange = (e) => {
    if (allowDeselect && field.value === e.target.value) {
      e.target.value = null
    }
    field.onChange(e)
  }
  return (
    <div className={`ocufield ocu-radio form-group ${className} ${status}`}>
      <input
      type='radio'
        id={field.name}
        {...field}
        checked={field.value}
        value={selectedValue}
        required={required}
        onChange={handleOnChange}
      />
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
