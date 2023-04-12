import React from 'react'
import PropTypes from 'prop-types'
import emailMask from 'text-mask-addons/dist/emailMask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import TextInput from './TextInput'

// ----------------------------------------------------------------------

TextInputMasked.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  maskOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

TextInputMasked.defaultProps = {
  className: '',
  type: 'text',
  maskOptions: false,
  required: false,
  placeholder: ''
}

const currencyMask = createNumberMask({
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 5, // limit length of integer numbers
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false
})
const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

export default function TextInputMasked (props) {
  const maskOptions = (props.type === 'text')
    ? false

    : (props.type === 'email')
        ? emailMask

        : (props.type === 'phone')
            ? phoneMask

            : (props.type === 'currency')
                ? currencyMask
                : false

  return (
    <TextInput {...props} {...maskOptions}/>
  )
}
