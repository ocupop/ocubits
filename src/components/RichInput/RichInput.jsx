import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'

import './RichInput.css'
// ----------------------------------------------------------------------

RichInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

RichInput.defaultProps = {
  required: false,
  disabled: false,
  theme: 'snow'
}

export default function RichInput ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  theme,
  onChange,
  field,
  form
}) {
  const { name } = field
  const error = fieldStatus({ form, field })

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
    <FieldGroup
    className={classNames('rich-input-field', className)}
      required={required}
      disabled={disabled}
      error={error}
    >
      <Label fieldName={name} label={label} />
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
      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
