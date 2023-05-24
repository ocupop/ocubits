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
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
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
  type: 'text',
  maskOptions: false,
  required: false
}

export default function MaskedInput ({
  className,
  innerRef,
  tooltip,
  hint,
  type,
  label,
  placeholder,
  required,
  disabled,
  maskOptions,
  field,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-textinput form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      <ReactMaskedInput
        mask={maskOptions}
        className={'form-input'}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
        ref={innerRef}
      />
      {hint && <div className='hint'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}