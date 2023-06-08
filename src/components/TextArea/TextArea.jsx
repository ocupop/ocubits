import React from 'react'
import PropTypes from 'prop-types'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
// ----------------------------------------------------------------------

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
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
  hint,
  placeholder,
  required,
  disabled,
  rows,
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
        <textarea
          {...field}
          id={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
        />
        <Hint hint={hint} />
        <ErrorMessage error={error} />
      </div>
    </FieldGroup>
  )
}
