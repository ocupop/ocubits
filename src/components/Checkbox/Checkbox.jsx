import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import { Checkbox } from 'flowbite-react'
import Label from '../Label/Label'
import './Checkbox.css'
// ----------------------------------------------------------------------

CheckboxInput.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
export default function CheckboxInput ({
  className = '',
  label,
  hint,
  field,
  required,
  form,
  form: { errors, touched }
}) {
  return (
    <div className={`form-group ocu-checkbox ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name}>{required && <span className='required'></span>}</Label>
      <Checkbox
        id={field.name}
        {...field}
        checked={field.value}
        required={required}
        onChange={() => {
          form.setFieldValue(field.name, !field.value)
        }}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
