import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'

import './Switch.css'
// ----------------------------------------------------------------------

Switch.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
Switch.defaultProps = {
  required: false,
  disabled: false
}
export default function Switch ({
  className,
  label,
  hint,
  required,
  disabled,
  field,
  form
}) {
  const { name } = field
  const error = fieldStatus({ form, field })
  return (
    <FieldGroup
      className={classNames('switch-field', className)}
      required={required}
      disabled={disabled}
      error={error}
    >
      <div className='field-input'>
        <input
          {...field}
          className={'form-input'}
          type="checkbox"
          role="switch"
          name={field.name}
          disabled={disabled}
          id={field.name}
        />
        <Label fieldName={name} label={label} />
      </div>
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
