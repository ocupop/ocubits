import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
// ----------------------------------------------------------------------

EmailInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

EmailInput.defaultProps = {
  required: false,
  disabled: false,
  placeholder: '___@___.___'
}

export default function EmailInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  field,
  form
}) {
  const { name } = field
  const error = fieldStatus({ form, field })

  return (
    <FieldGroup
      className={className}
      required={required}
      disabled={disabled}
      error={error}>
      <Label fieldName={name} label={label} />
      <div className="field-input">
        <MaskedInput
          id={name}
          {...field}
          type='text'
          mask={emailMask}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <Hint hint={hint} />
        <ErrorMessage error={error} />
      </div>
    </FieldGroup>
  )
}
