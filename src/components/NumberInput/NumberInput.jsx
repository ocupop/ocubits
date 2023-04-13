import React from 'react'
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
// ----------------------------------------------------------------------

NumberInput.propTypes = {
  maskOptions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool
  ])
}

NumberInput.defaultProps = {
  maskOptions: null
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

export default function NumberInput ({ maskOptions, ...props }) {
  const allMaskOptions = {
    ...defaultMaskOptions,
    ...maskOptions
  }
  const type = (
    !allMaskOptions.allowLeadingZeroes &&
    (!allMaskOptions.includeThousandsSeparator || allMaskOptions.thousandsSeparatorSymbol === '') &&
    allMaskOptions.prefix === '' &&
    allMaskOptions.suffix === ''
  )
    ? 'number'
    : 'text'
  return (
    <MaskedInput
      {...props}
      type={type}
      maskOptions={createNumberMask(allMaskOptions)}
    />
  )
}
