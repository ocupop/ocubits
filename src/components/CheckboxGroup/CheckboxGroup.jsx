import React from 'react'
import PropTypes from 'prop-types'
import { getIn, Field } from 'formik'
import Label from '../Label/Label'
import Checkbox from '../Checkbox/Checkbox'
import './CheckboxGroup.css'
// ----------------------------------------------------------------------

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  checkboxes: PropTypes.array,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

CheckboxGroup.defaultProps = {
  required: false,
  disabled: false
}

export default function CheckboxGroup ({
  className = '',
  label,
  tooltip,
  hint,
  field,
  required,
  disabled,
  checkboxes,
  form: { errors, touched }
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  return (
    <div className={`ocufield ocu-checkboxgroup ${className} ${status}`}>
      <Label label={label} tooltip={tooltip} required={required} className="checkboxGroupLabel"/>
      <div role="group" aria-labelledby="my-checkbox-group">
        {checkboxes && checkboxes.map((c) =>
          <Field
            key={c.value}
            component={Checkbox}
            name={c.name}
            label={`${c.label}`}
            value={c.value}
            hint={c.hint}
            tooltip={c.tooltip}
            className={c.className}
            disabled={disabled || c.disabled}
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
