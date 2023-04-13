import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
import Label from '../Label/Label'
import './EmailInput.css'
// ----------------------------------------------------------------------

EmailInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

EmailInput.defaultProps = {
  className: '',
  type: 'text' // setting this to "email" breaks emailMask
}

export default function EmailInput ({
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
    <div className={`ocu-emailinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name}>{required && <span className='required'></span>}</Label>
      <MaskedInput
        mask={emailMask}
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
