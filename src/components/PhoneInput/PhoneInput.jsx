import React from 'react'
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
// ----------------------------------------------------------------------

const usParens = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const usNoAreaCode = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const international = ['+', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] // TESTING: NOT an actual mask

PhoneInput.propTypes = {
  format: PropTypes.string
}
PhoneInput.defaultProps = {
  format: 'usParens'
}
export default function PhoneInput ({ format, ...props }) {
  const maskOptions = (format === 'usParens')
    ? usParens
    : (format === 'usNoAreaCode')
        ? usNoAreaCode
        : (format === 'international')
            ? international
            : false
  return (
    <MaskedInput {...props} type='tel' maskOptions={maskOptions} />
  )
}
