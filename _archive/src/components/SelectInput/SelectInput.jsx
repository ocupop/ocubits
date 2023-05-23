import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import Select from 'react-select'

import Label from '../Label/Label'
import './SelectInput.css'
// ----------------------------------------------------------------------
SelectInput.propTypes = {
  className: PropTypes.string,
  field: PropTypes.instanceOf(Object),
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  required: PropTypes.bool,
  disabled: PropTypes.bool
}
SelectInput.defaultProps = {
  required: false,
  disabled: false
}

export default function SelectInput ({
  className,
  form,
  field,
  tooltip,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  onChange,
  options,
  required,
  disabled,
  form: { errors, touched }
}) {
  const formatGroupLabel = (data) => (
    <div className='select-group'>
      <span className='label'>{data.label}</span>
      <span className='badges'>{data.options.length}</span>
    </div>
  )

  const status = touched[field.name] && errors[field.name] ? 'invalid' : ''

  const handleOnChange = (option) => {
    if (onChange) onChange(option)
    form.setFieldValue(field.name, option)
  }
  return (
    <div className={`ocufield ocu-select form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label
        label={label}
        tooltip={tooltip}
        htmlFor={field.name}
        required={required}
      />
      <Select
        {...field}
        required={required}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        onChange={handleOnChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isDisabled={disabled}
        isClearable
        classNamePrefix='select'
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#EBECF0',
            primary: '#3737F3'
          }
        })}
      />
      {hint && <div className='hint'>{hint}</div>}
      {getIn(errors, field.name) && (
        <small className='form-validation-error'>
          {getIn(errors, field.name)}
        </small>
      )}
    </div>
  )
}
