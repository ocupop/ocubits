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
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
CheckboxInput.defaultProps = {
  required: false,
  disabled: false
}
export default function CheckboxInput ({
  className = '',
  label,
  tooltip,
  hint,
  field,
  required,
  disabled,
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-checkbox form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <input
      type='checkbox'
        id={field.name}
        {...field}
        checked={field.value}
        required={required}
        disabled={disabled}
        onChange={() => {
          form.setFieldValue(field.name, !field.value)
        }}
      />
      <div className='label-and-hint'>
        <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
        {hint && <div className='hint'>{hint}</div>}
      </div>
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
