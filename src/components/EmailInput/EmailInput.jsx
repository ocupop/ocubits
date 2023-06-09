
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
import emailMask from 'text-mask-addons/dist/emailMask'
// ----------------------------------------------------------------------

EmailInput.propTypes = {
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

EmailInput.defaultProps = {
  required: false,
  disabled: false
}

export default function EmailInput (props) {
  return (
    <MaskedInput {...props} type='text' maskOptions={emailMask} />
  )
}
