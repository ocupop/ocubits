import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import Label from '../Label/Label'
// import './CheckboxWithText.css'
// ----------------------------------------------------------------------

CheckboxWithText.propTypes = {
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

CheckboxWithText.defaultProps = {
  required: false,
  disabled: false
}

export default function CheckboxWithText ({
  className,
  innerRef,
  tooltip,
  hint,
  label,
  placeholder,
  required,
  disabled,
  field,
  form,
  form: { errors, touched }
}) {
  const [showField, setShowField] = useState(false)
  const [savedValue, setSavedValue] = useState(field.value)
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      form.setFieldValue(field.name, savedValue)
      setShowField(true)
    } else {
      setSavedValue(field.value)
      form.setFieldValue(field.name, undefined)
      setShowField(false)
    }
  }

  return (
    <div className={`ocufield ocu-textinput form-group ${className} ${status} ${disabled && 'disabled'}`}>

      <div className='flex'>
        <input
          type='checkbox'
          className='mb-2'
          onChange={handleCheckbox}
        />
        <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      </div>

      {showField &&
        <input
          className={'form-input'}
          {...field}
          value={field.value || ''}
          placeholder={placeholder}
          type='text'
          required={required}
          disabled={disabled}
          ref={innerRef}
        />
      }
      {hint && <div className='hint'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
