import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
// ----------------------------------------------------------------------

PhoneInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

PhoneInput.defaultProps = {
  required: false,
  disabled: false,
  placeholder: '(___) ___-____'
}

const phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

export default function PhoneInput ({
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
          mask={phoneMask}
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
