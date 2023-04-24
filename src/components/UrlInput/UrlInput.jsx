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
  helperText: PropTypes.string,
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
  helperText,
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
    e.target.value = checkProtocol(newUrl)

    if (field.onChange) field.onChange(e)
  }

  const checkProtocol = (url) => {
    if (/^[a-zA-Z]+:\/\//.test(url)) {
      // URL already contains a protocol, remove any duplicate protocols
      url = url.replace(/^(\w+:\/{2,3})+/i, '$1')
    } else {
      // URL doesn't have a protocol, add "https://" to the beginning
      url = `http${secure ? 's' : ''}://${url}`
    }
    return url
  }

  return (
    <div className={`ocufield ocu-urlinput form-group ${className}`}>

      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <input
        className={`form-input ${status}`}
        { ...field }
        placeholder={placeholder}
        type='url'
        required={required}
        ref={innerRef}
        onChange={handleOnChange}
      />
      {helperText && <div className='helper'>{helperText}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
