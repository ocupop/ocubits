import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'
import { FaCalendarDay } from 'react-icons/fa'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './DateInput.css'
// ----------------------------------------------------------------------

DateInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  range: PropTypes.bool,
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

DateInput.defaultProps = {
  required: false,
  disabled: false,
  range: false,
  onChange: null
}

export default function DateInput ({
  className,
  label,
  hint,
  placeholder,
  range,
  onChange,
  required,
  disabled,
  field,
  form,
  ...config
}) {
  const { name, value } = field
  console.log('VALUE', value)
  const { setFieldValue } = form
  const error = fieldStatus({ form, field })
  const handleChange = (date) => {
    if (!onChange) {
      setFieldValue(name, date)
      return
    }
    onChange(date)
  }

  return (
    <FieldGroup
      className={classNames('date-field', className)}
      required={required}
      disabled={disabled}
      error={error}>
      <Label fieldName={name} label={label} />
      <div className="field-input">
        <span className="input-modifier"><FaCalendarDay className="text-dark/90" /></span>
        {range && (
          <>
            <DatePicker
              selected={value?.startDate}
              onChange={(date) => setFieldValue(name, { ...value, startDate: date })}
              selectsStart
              startDate={value?.startDate}
              endDate={value?.endDate}
              {...config}
            />
            <DatePicker
              selected={value?.endDate}
              onChange={(date) => setFieldValue(name, { ...value, endDate: date })}
              selectsEnd
              startDate={value?.startDate}
              endDate={value?.endDate}
              minDate={value?.startDate}
              {...config}
            />
          </>
        )}

        {!range && (
          <DatePicker
            id={name}
            selected={value}
            onChange={handleChange}
            placeholderText={placeholder}
            {...config}
          />
        )}

        <Hint hint={hint} />
        <ErrorMessage error={error} />
      </div>
    </FieldGroup>
  )
}
