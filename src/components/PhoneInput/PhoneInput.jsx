
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
// ----------------------------------------------------------------------

const usParens = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const usNoAreaCode = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

PhoneInput.propTypes = {
  format: PropTypes.string,

  className: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
PhoneInput.defaultProps = {
  format: 'usParens'
}
export default function PhoneInput ({ format, ...props }) {
  const maskOptions = (format === 'usParens')
    ? usParens
    : (format === 'usNoAreaCode')
        ? usNoAreaCode
        : false
  return (
    <MaskedInput {...props} type='tel' maskOptions={maskOptions} />
  )
}
