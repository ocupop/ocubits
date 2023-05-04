import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './TextArea.css'
// ----------------------------------------------------------------------

TextArea.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextArea.defaultProps = {
  required: false,
  disabled: false,
  rows: 4
}

export default function TextArea ({
  className,
  label,
  tooltip,
  hint,
  rows,
  placeholder,
  field,
  required,
  disabled,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-textarea form-group  ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      <textarea
        className={'form-input'}
        {...field}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
      />
      {hint && <div className='hint'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
