import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Label/Label'
import { getIn } from 'formik'
import './TextInput.css'
// ----------------------------------------------------------------------

TextInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextInput.defaultProps = {
  className: '',
  type: 'text'
}

export default function TextInput({
  className,
  innerRef,
  hint,
  type,
  label,
  placeholder = '',
  required = false,
  field,
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? `invalid` : ``

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint}></Label>
      <input
        className={`form-input ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
        ref={innerRef}
      />

      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
