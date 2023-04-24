import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
// eslint-disable-next-line import/no-named-default
import { default as ReactMaskedInput } from 'react-text-mask'

import Label from '../Label/Label'
import '../TextInput/TextInput.css'
// ----------------------------------------------------------------------

MaskedInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  maskOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
    PropTypes.func
  ]),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

MaskedInput.defaultProps = {
  className: '',
  type: 'text',
  maskOptions: false,
  required: false,
  placeholder: ''
}

export default function MaskedInput ({
  className,
  innerRef,
  hint,
  helperText,
  type,
  label,
  placeholder,
  required,
  maskOptions,
  field,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-textinput form-group ${className} ${status}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <ReactMaskedInput
        mask={maskOptions}
        className={'form-input'}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
        ref={innerRef}
      />
      {helperText && <div className='helper'>{helperText}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
