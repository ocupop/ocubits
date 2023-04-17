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
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
  range: PropTypes.bool,
  picker: PropTypes.string
}

DateInput.defaultProps = {
  className: '',
  required: false,
  placeholder: '',
  range: false,
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
  range,
  picker
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
