import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import Datepicker from 'react-tailwindcss-datepicker'
import Label from '../Label/Label'
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

  asSingle: PropTypes.bool,
  useRange: PropTypes.bool,
  showShortcuts: PropTypes.bool,
  showFooter: PropTypes.bool,
  startFrom: PropTypes.instanceOf(Date),
  dateFormat: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date)
}

DateInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  asSingle: true,
  useRange: false,
  startFrom: new Date(),
  showShortcuts: false,
  showFooter: false,
  dateFormat: 'YYYY/MM/DD',
  onChange: () => null,
  minDate: null,
  maxDate: null
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

  asSingle,
  useRange,
  startFrom,
  showShortcuts,
  showFooter,
  dateFormat,
  minDate,
  maxDate
}) {
  const handleValueChange = (newValue) => {
    form.setFieldValue(field.name, newValue)
    onChange(newValue)
  }
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocu-datepicker form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <Datepicker
        containerClassName='dateinput-container'
        toggleClassName="toggle"
        inputClassName={`form-input ${status}`}
        placeholder={placeholder}
        value={field.value}
        onChange={handleValueChange}
        displayFormat={dateFormat}
        asSingle={asSingle}
        useRange={useRange}
        separator={'-'}
        startFrom={startFrom}
        showShortcuts={showShortcuts}
        showFooter={showFooter}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
