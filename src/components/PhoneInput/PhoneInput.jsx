import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import MaskedInput from 'react-text-mask'
import Label from '../Label/Label'
import './PhoneInput.css'
// ----------------------------------------------------------------------

const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

PhoneInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

PhoneInput.defaultProps = {
  className: '',
  type: 'phone'
}

export default function PhoneInput ({
  className,
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  form: { errors, touched }
}) {
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  return (
    <div className={`ocu-phoneinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name}>{required && <span className='required'></span>}</Label>
      <MaskedInput
        mask={phoneMask}
        className={`form-input ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
