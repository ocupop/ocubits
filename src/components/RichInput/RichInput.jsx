import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './RichInput.css'
// ----------------------------------------------------------------------

RichInput.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  innerRef: PropTypes.func,
  tooltip: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func
}

RichInput.defaultProps = {
  required: false,
  disabled: false,
  theme: 'snow'
}

export default function RichInput ({
  className,
  theme,
  tooltip,
  hint,
  label,
  placeholder,
  required,
  disabled,
  field,
  form,
  form: { errors, touched },
  onChange
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const handleOnChange = (val) => {
    if (onChange) onChange(val)
    form.setFieldValue(field.name, val)
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  }

  return (
    <div className={`ocufield ocu-richinput form-group ${className} ${status} ${disabled && 'disabled'}`}>
      <Label label={label} tooltip={tooltip} htmlFor={field.name} required={required}/>
      <ReactQuill
        {...field}
        modules = {modules}
        className={'form-input'}
        theme={theme}
        value={field.value}
        onChange={handleOnChange}
        required={required}
        readOnly = {disabled}
        placeholder={placeholder}
      />
      {hint && <div className='helper'>{hint}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
