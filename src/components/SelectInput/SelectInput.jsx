import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { getIn } from 'formik'

import { Label, FieldGroup, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './SelectInput.css'
// ----------------------------------------------------------------------
SelectInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.instanceOf(Object),
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}
SelectInput.defaultProps = {
  required: false,
  disabled: false,
  onChange: null
}

export default function SelectInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  options,
  isMulti,
  isSearchable,
  onChange,
  field,
  form
}) {
  const { name } = field
  const { setFieldValue, initialValues } = form
  const error = fieldStatus({ form, field })
  const [selectedOption, setSelectedOption] = useState(options.find(o => o.value === getIn(initialValues, name)))

  const formatGroupLabel = (data) => (
    <div className='select-group'>
      <span className='label'>{data.label}</span>
      <span className='badges'>{data.options.length}</span>
    </div>
  )

  const handleChange = (option) => {
    setSelectedOption(option)
    onChange ? onChange(option) : setFieldValue(name, option)
  }

  return (
    <FieldGroup
      className={className}
      required={required}
      disabled={disabled}
      error={error}>
      <Label fieldName={name} label={label} />

      <Select
        {...field}
        id={name}
        value={selectedOption}
        required={required}
        formatGroupLabel={formatGroupLabel}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isDisabled={disabled}
        isClearable
        classNamePrefix='select'
      />
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
