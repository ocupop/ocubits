import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
// ----------------------------------------------------------------------

NumberInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  maskOptions: PropTypes.instanceOf(Object),
  type: PropTypes.oneOf(['text', 'number']),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

NumberInput.defaultProps = {
  placeholder: '0',
  required: false,
  disabled: false,
  type: 'text'
}

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 20, // limit length of integer numbers
  requireDecimal: false,
  allowNegative: true,
  allowLeadingZeroes: false
}

export default function NumberInput ({
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
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

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
          type={type}
          mask={numberMask}
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
