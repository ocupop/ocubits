import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import Label from '../Label/Label'
import './Checkbox.css'
// ----------------------------------------------------------------------

CheckboxInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
export default function CheckboxInput ({
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
    <div className={`ocufield ocu-checkbox form-group ${className} ${status}`}>
      <input
      type='checkbox'
        id={field.name}
        {...field}
        checked={field.value}
        required={required}
        onChange={() => {
          form.setFieldValue(field.name, !field.value)
        }}
      />
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
