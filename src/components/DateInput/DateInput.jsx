import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Label from '../Label/Label'
import './DateInput.css'
// ----------------------------------------------------------------------

DateInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  range: PropTypes.bool,
  twoFields: PropTypes.bool,
  isClearable: PropTypes.bool,
  onChange: PropTypes.func
}

DateInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  range: false,
  twoFields: true,
  isClearable: false,
  onChange: () => null
}

export default function DateInput ({
  className,
  innerRef,
  hint,
  helperText,
  label,
  placeholder,
  required,
  field,
  form,
  form: { errors, touched },
  onChange,
  isClearable,
  range,
  twoFields
}) {
  const handleValueChange = (newValue) => {
    form.setFieldValue(field.name, newValue)
    onChange && onChange(newValue)
  }
  const setStartDate = (newValue) => {
    form.setFieldValue(field.name, [newValue, Array.isArray(field.value) ? field.value[1] : null])
  }
  const setEndDate = (newValue) => {
    form.setFieldValue(field.name, [Array.isArray(field.value) ? field.value[0] : null, newValue])
  }
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const startDate = Array.isArray(field.value) && field.value.length > 0 ? field.value[0] : null
  const endDate = Array.isArray(field.value) && field.value.length > 1 ? field.value[1] : null
  return (
    <div className={`ocufield ocu-dateinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <DatePicker
        className={`form-input ${status}`}
        selected={(!range && field.value) ? field.value : startDate || null }
        onChange={(!range || !twoFields) ? handleValueChange : setStartDate}
        showTimeSelect={false}
        showIcon={true}
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholder}
        withPortal={false}
        isClearable={isClearable}
        selectsStart={range && twoFields}
        selectsRange={range && !twoFields}
        startDate={range && startDate}
        endDate={range && endDate}
      />

      {(range && twoFields) &&
      <DatePicker
        className={`form-input ${status}`}
        selected={
          !Array.isArray(field.value)
            ? null
            : field.value.length > 1 ? field.value[1] : field.value.length > 0 ? field.value[0] : null
        }
        onChange={setEndDate}
        showTimeSelect={false}
        showIcon={true}
        dateFormat="MMMM d, yyyy"
        isClearable={isClearable}
        placeholderText={placeholder}
        withPortal={false}

        selectsEnd
        startDate={startDate}
        endDate={endDate}
      />
      }
      {helperText && <div className='helper'>{helperText}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
