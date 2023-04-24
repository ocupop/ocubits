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
  hint: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func
}

RichInput.defaultProps = {
  className: '',
  theme: 'snow',
  required: false,
  placeholder: ''
}

export default function RichInput ({
  className,
  theme,
  hint,
  helperText,
  label,
  placeholder,
  required,
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
    <div className={`ocufield ocu-richinput form-group ${className} ${status}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <ReactQuill
        {...field}
        readOnly = {false}
        modules = {modules}
        className={'form-input'}
        theme={theme}
        value={field.value}
        onChange={handleOnChange}
        required={required}
        placeholder={placeholder}
      />
      {helperText && <div className='helper'>{helperText}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
