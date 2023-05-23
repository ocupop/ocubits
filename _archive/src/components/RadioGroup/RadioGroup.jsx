import React from 'react'
import PropTypes from 'prop-types'
import { getIn, Field, FormikProvider } from 'formik'
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
  radios: PropTypes.array,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
RadioGroup.defaultProps = {
  disabled: false,
  required: false
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
  form,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-radiogroup ${className} ${status}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required} className="radioGroupLabel"/>
      <div role="group" aria-labelledby="my-radio-group">
        <FormikProvider value={form}>
          {radios.map((radio, i) => (
            <Field
              key={`radio-${i}`}
              component={RadioInput}
              name={field.name}
              label={radio.label}
              value={radio.value}
              hint={radio.hint}
              tooltip={radio.tooltip}
              className={radio.className}
              disabled={disabled || radio.disabled}
            />
          ))}
        </FormikProvider>
      </div>

      {hint && <div className='hint'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
