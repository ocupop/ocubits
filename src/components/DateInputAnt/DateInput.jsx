import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import dayjs from 'dayjs'
import { DatePicker, Space } from 'antd'
import Label from '../Label/Label'
import './DateInput.css'
const { RangePicker } = DatePicker
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
  range: PropTypes.bool,
  picker: PropTypes.string
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
  range: false,
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
  range,
  picker

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
    <div className={`ocu-datepicker form-group ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>

        {range
          ? <RangePicker onChange={handleValueChange} picker={picker} className={`${className} ${status}`}/>
          : <DatePicker onChange={handleValueChange} picker={picker} className={`${className} ${status}`} defaultValue={field.value && dayjs(field.value, 'YYYY-MM-DD')} />
      }

      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
