import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getIn } from 'formik'
import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './OtherInput.css'
// ----------------------------------------------------------------------

OtherInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf(['checkbox', 'radio']),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
OtherInput.defaultProps = {
  required: false,
  disabled: false,
  inputType: 'checkbox',
  placeholder: 'Other'
}
export default function OtherInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  inputType,
  field,
  form
}) {
  const { name, value } = field
  const { setFieldValue, initialValues } = form
  const error = fieldStatus({ form, field })
  const [isChecked, setIsChecked] = useState(value !== '' && value !== undefined)
  const [storedValue, setStoredValue] = useState(getIn(initialValues, name))

  const handleChange = (e) => {
    setFieldValue(name, e.target.checked ? storedValue : undefined)
    setIsChecked(!isChecked)
  }

  return (
    <FieldGroup
      className={classNames('other-field', className)}
      required={required}
      disabled={disabled}
      error={error}>
      <div className="field-input">
        <input
          type={inputType}
          id={name}
          checked={isChecked}
          onChange={handleChange}
        />
        { !isChecked
          ? <Label fieldName={name} label={label} className='my-2'/>
          : <>
            <Label className="sr-only" fieldName={name} label={label} />
            <input
              id={name}
              {...field}
              type='text'
              value={value || ''}
              placeholder={placeholder}
              required={isChecked}
              disabled={!isChecked}
              onKeyUp={(e) => setStoredValue(e.target.value)}
            />
          </>
        }
      </div>
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
