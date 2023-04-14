import React from 'react'
import PropTypes from 'prop-types'

import MaskedInput from '../MaskedInput/MaskedInput'
import emailMask from 'text-mask-addons/dist/emailMask'
// ----------------------------------------------------------------------

EmailInput.propTypes = {}

EmailInput.defaultProps = {}

export default function EmailInput (props) {
  return (
    <MaskedInput {...props} type='text' maskOptions={emailMask} />
  )
}
