import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './UrlInput.css'
// ----------------------------------------------------------------------

UrlInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
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
  tooltip,
  hint,
  label,
  placeholder,
  required,
  field,
  secure,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''

  const displayUrl = field.value ? field.value.replace(/(^\w+:|^)\/\//, '') : ''

  const handleOnBlur = (e) => {
    let url = window.decodeURIComponent(e.target.value)
    if (url) {
      url = url.trim().replace(/\s/g, '') /// trim and remove spaces
      e.target.value = addProtocol(url)
    }

    if (field.onChange) field.onChange(e)
  }

  const addProtocol = (url) => {
    if (/^[a-zA-Z]+:\/\//.test(url)) {
      console.log('Url already contains protocol')
    } else {
      console.log('NO protocol')
      url = `http${secure ? 's' : ''}://${url}`
    }
    return url
  }

  return (
    <div className={`ocufield ocu-urlinput form-group ${className}`}>

      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      <div className="input-group">
        <span className="input-group-text prefix" id="basic-addon1">http{secure ? 's' : ''}://</span>
        <input
          className={`form-input ${status}`}
          { ...field }
          value={displayUrl}
          placeholder={placeholder}
          type='url'
          required={required}
          ref={innerRef}
          onBlur={handleOnBlur}
        />
      </div>
      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
