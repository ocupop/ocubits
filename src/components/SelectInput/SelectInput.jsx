import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Label from '../Label/Label'
import { getIn } from 'formik'
import './SelectInput.css'
// ----------------------------------------------------------------------
SelectInput.propTypes = {
  className: PropTypes.string,
  field: PropTypes.instanceOf(Object),
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  type: PropTypes.string,
  required: PropTypes.bool
}

const formatGroupLabel = (data) => (
  <div className='select-group'>
    <span className='label'>{data.label}</span>
    <span className='badges' >{data.options.length}</span>
  </div>
)

export default function SelectInput ({
  className,
  form,
  field,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  type,
  onChange,
  options,
  required,
  form: { errors, touched }
}) {
  const status = touched[field.name] && errors[field.name] ? 'invalid' : ''

  const doOnChange = (option) => {
    onChange(option)
    form.setFieldValue(field.name, option)
  }
  return (
    <div className={`form-group ocu-select ${className}`}>
      <Label label={label} hint={hint} htmlFor={field.name}>{required && <span className='required'></span>}</Label>
      <Select
        {...field}
        required={required}
        type={type}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        onChange={doOnChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable
        className={`${status}`}
        classNamePrefix="select"
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

      {getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
