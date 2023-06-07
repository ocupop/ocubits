import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label, FieldGroup, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './RadioGroup.css'
// ----------------------------------------------------------------------

RadioGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.instanceOf(Array),
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
RadioGroup.defaultProps = {
  disabled: false,
  required: false,
  onChange: null
}

export default function RadioGroup ({
  className,
  label,
  hint,
  required,
  disabled,
  options,
  initialValue,
  onChange,
  field,
  form
}) {
  const { name } = field
  const { setFieldValue } = form
  const error = fieldStatus({ form, field })
  const [selectedOption, setSelectedOption] = useState(initialValue)

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
    onChange ? onChange(e) : setFieldValue(name, e.target.value)
  }

  return (
    <FieldGroup
      className={classNames('radio-group-field', className)}
      required={required}
      disabled={disabled}
      error={error}
      role="group">
      <Label fieldName={name} label={label} />
      {options.map(({ value, label, hint }) => (
        <div key={value} className="field-input">
          <input
            {...field}
            type='radio'
            id={value}
            name={name}
            value={value}
            checked={selectedOption === value || (Array.isArray(selectedOption) && selectedOption.includes(value))}
            onChange={handleChange}
          />
          <Label fieldName={value} label={label} />
          <Hint hint={hint}/>
        </div>
      ))}
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
