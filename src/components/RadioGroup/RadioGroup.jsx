import React from 'react'
import PropTypes from 'prop-types'
import { getIn, Field } from 'formik'
import Label from '../Label/Label'
import RadioInput from '../RadioInput/RadioInput'
import './RadioGroup.css'
// ----------------------------------------------------------------------

RadioGroup.propTypes = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  radios: PropTypes.instanceOf(Object),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

export default function RadioGroup ({
  className = '',
  label,
  tooltip,
  hint,
  field,
  required,
  disabled,
  radios,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-radiogroup ${className} ${status}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required} className="radioGroupLabel"/>
      <div role="group" aria-labelledby="my-radio-group">
        {radios.map((radio) =>
          <Field
            key={radio.value}
            component={RadioInput}
            name={field.name}
            label={radio.label}
            value={radio.value}
            hint={radio.hint}
            tooltip={radio.tooltip}
            className={radio.className}
            disabled={disabled || radio.disabled}
          />
        )}
      </div>

      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
