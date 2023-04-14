import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './TextArea.css'
// ----------------------------------------------------------------------

TextArea.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextArea.defaultProps = {
  className: ''
}

export default function TextArea ({
  className,
  label,
  hint,
  rows,
  placeholder,
  field,
  required,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`form-group ocu-textarea ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <textarea
        className={`form-input ${status}`}
        {...field}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
