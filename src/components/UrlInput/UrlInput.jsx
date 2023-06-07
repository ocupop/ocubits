import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label, Hint, ErrorMessage, FieldGroup } from '@components'
import { removeProtocol, fieldStatus } from '@lib'
import './UrlInput.css'
// ----------------------------------------------------------------------

UrlInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  secure: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

UrlInput.defaultProps = {
  required: false,
  disabled: false,
  secure: true
}

export default function UrlInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  secure,
  field,
  form
}) {
  const { name } = field
  const error = fieldStatus({ form, field })
  const [display, setDisplay] = useState(removeProtocol(field.value))

  const handleChange = (value) => {
    const url = formatUrl(value)
    form.setFieldValue(name, url)
  }

  const formatUrl = (value) => {
    const url = removeProtocol(value)
    setDisplay(url)
    return secure ? `https://${url}` : `http://${url}`
  }

  return (
    <FieldGroup
      className={classNames('url-field', className)}
      required={required}
      disabled={disabled}
      error={error}>
      <Label fieldName={name} label={label} />
      <div className="field-input">
        <span className="input-modifier">{secure ? 'https://' : 'http://'}</span>
        <input
          id={name}
          type='url'
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={display}
          onChange={({ target: { value } }) => handleChange(value)}
        />
      </div>
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
