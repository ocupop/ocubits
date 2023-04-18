import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './TextInput.css'
// ----------------------------------------------------------------------

TextInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextInput.defaultProps = {
  className: '',
  required: false,
  placeholder: ''
}

export default function TextInput ({
  className,
  innerRef,
  hint,
  label,
  placeholder,
  required,
  field,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocu-textinput form-group ${className} ${status}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <input
        className={'form-input'}
        {...field}
        placeholder={placeholder}
        type='text'
        required={required}
        ref={innerRef}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
