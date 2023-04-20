import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './UrlInput.css'
// ----------------------------------------------------------------------

UrlInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  secure: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

UrlInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  secure: false
}

export default function UrlInput ({
  className,
  innerRef,
  hint,
  label,
  placeholder,
  required,
  field,
  secure,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''

  const handleOnChange = (e) => {
    let newUrl = window.decodeURIComponent(e.target.value)
    newUrl = newUrl.trim().replace(/\s/g, '') /// trim and remove spaces
    if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
      e.target.value = secure ? `https://${newUrl}` : `http://${newUrl}`
    }
    if (field.onChange) field.onChange(e)
  }

  return (
    <div className={`ocu-urlinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <input
        className={`form-input ${status}`}
        { ...field }
        value={field.value || (secure ? 'https://' : 'http://')}
        placeholder={placeholder}
        type='url'
        required={required}
        ref={innerRef}
        onChange={handleOnChange}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
