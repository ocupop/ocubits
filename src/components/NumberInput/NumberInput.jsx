import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { getIn } from 'formik'
import Label from '../Label/Label'
import './NumberInput.css'
// ----------------------------------------------------------------------

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false
}

NumberInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  maskOptions: PropTypes.instanceOf(Object),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

NumberInput.defaultProps = {
  className: '',
  type: 'text'
}

export default function NumberInput ({
  className,
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  maskOptions,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <div className={`ocu-numberinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name}>{required && <span className='required'></span>}</Label>
      <MaskedInput
        mask={numberMask}
        className={`form-input ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
