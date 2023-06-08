import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-named-default
import { default as ReactMaskedInput } from 'react-text-mask'
import { getIn } from 'formik'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import '../TextInput/TextInput.css'
// ----------------------------------------------------------------------

MaskedInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  maskOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
    PropTypes.func
  ]),
  type: PropTypes.string,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

MaskedInput.defaultProps = {
  required: false,
  disabled: false,
  maskOptions: false,
  type: 'text'
}

export default function MaskedInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  maskOptions,
  type,
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
        <ReactMaskedInput
          id={name}
          {...field}
          type={type}
          mask={maskOptions}
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
