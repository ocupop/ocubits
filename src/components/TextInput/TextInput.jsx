import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './TextInput.css'
// ----------------------------------------------------------------------

TextInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextInput.defaultProps = {
  required: false,
  disabled: false
}

export default function TextInput ({
  className,
  innerRef,
  tooltip,
  hint,
  label,
  placeholder,
  required,
  disabled,
  field,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-textinput form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      <input
        className={'form-input'}
        {...field}
        placeholder={placeholder}
        type='text'
        required={required}
        disabled={disabled}
        ref={innerRef}
      />
      {hint && <div className='hint'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}