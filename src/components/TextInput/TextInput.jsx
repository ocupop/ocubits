import React from 'react'
import PropTypes from 'prop-types'

import { Label, FieldGroup, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './TextInput.css'
// ----------------------------------------------------------------------

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextInput.defaultProps = {
  required: false,
  disabled: false
}

export default function TextInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  field,
  form
}) {
  const { name, value } = field
  const error = fieldStatus({ form, field })

  return (
    <FieldGroup
      className={className}
      required={required}
      disabled={disabled}
      error={error}>
      <Label fieldName={name} label={label} />
      <div className="field-input">
        <input
          id={name}
          {...field}
          value={value || ''}
          type='text'
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        <Hint hint={hint} />
        <ErrorMessage error={error} />
      </div>
    </FieldGroup>
  )
}
