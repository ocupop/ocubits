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
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,

  // asSingle: PropTypes.bool,
  type: PropTypes.string
  // showShortcuts: PropTypes.bool,
  // showFooter: PropTypes.bool,
  // startFrom: PropTypes.instanceOf(Date),
  // dateFormat: PropTypes.string,
  // minDate: PropTypes.instanceOf(Date),
  // maxDate: PropTypes.instanceOf(Date)
}

DateInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  type: 'single',
  picker: null,

  // dateFormat: 'YYYY/MM/DD',
  onChange: () => null
  // minDate: null,
  // maxDate: null
}

export default function DateInput ({
  className,
  hint,
  label,
  placeholder,
  required,
  field,
  form,
  form: { errors, touched },
  onChange,
  type

  // asSingle,
  // useRange,
  // startFrom,
  // showShortcuts,
  // showFooter,
  // dateFormat,
  // minDate,
  // maxDate
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
          // value={new Date().setDate(-10)}>
          id="date-picker"
          placeholder="mm/dd/yyyy"
          labelText={type === 'range' && 'Start'}
          type="text"
          // maxDate="09/01/2020"
          // minDate="02/01/2020"
          // enable={["2021-04-01", "2021-05-01"]} //
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
