import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label, FieldGroup, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './Checkbox.css'
// ----------------------------------------------------------------------

CheckboxInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
CheckboxInput.defaultProps = {
  required: false,
  disabled: false,
  onChange: null
}
export default function CheckboxInput ({
  className,
  label,
  hint,
  required,
  disabled,
  onChange,
  field,
  form
}) {
  const { name, value } = field
  const { setFieldValue } = form
  const error = fieldStatus({ form, field })

  const handleChange = (e) => {
    onChange
      ? onChange(e)
      : setFieldValue(name, !e.target.checked ? undefined : value || true)
  }

  return (
    <FieldGroup
      className={classNames('checkbox-field', className)}
      required={required}
      disabled={disabled}
      error={error}>
      <div className='field-input'>
        <input
          {...field}
          id={name}
          type='checkbox'
          checked={value || false}
          required={required}
          disabled={disabled}
          onChange={handleChange}
        />
        <Label fieldName={name} label={label} />
      </div>
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
