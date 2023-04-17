import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import { DatePicker, DatePickerInput } from '@carbon/react'
import Label from '../Label/Label'
import '@carbon/styles/css/styles.min.css'
import './DateInput.css'
// ----------------------------------------------------------------------

DateInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
  type: PropTypes.string
}

DateInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  type: 'single',
  picker: null,
  onChange: () => null
}

export default function DateInput ({
  className,
  hint,
  label,
  required,
  field,
  form,
  form: { errors, touched },
  onChange,
  type
}) {
  const handleValueChange = (newValue) => {
    console.log(newValue)
    form.setFieldValue(field.name, newValue)
    onChange(newValue)
  }
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocu-dateinput form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>

      <DatePicker
        dateFormat="m/d/Y"
        datePickerType={type}
        className={`${status}`}
        onChange={handleValueChange}
       >
        <DatePickerInput
          id="date-picker"
          placeholder="mm/dd/yyyy"
          labelText={type === 'range' && 'Start'}
          type="text"
        />
        {type === 'range' &&
          <DatePickerInput
            id="date-picker-range-end"
            placeholder="mm/dd/yyyy"
            labelText="End"
            type="text"
          />
        }
      </DatePicker>

      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
