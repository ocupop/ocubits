import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { FieldGroup, Label, Hint, ErrorMessage } from '@components'
import { fieldStatus } from '@lib'
import './DraftJS.css'
// ----------------------------------------------------------------------

DraftJS.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

DraftJS.defaultProps = {
  theme: 'snow',
  required: false,
  disabled: false
}

export default function DraftJS ({
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  onChange,
  field,
  form
}) {
  const { name } = field
  const error = fieldStatus({ form, field })
  const handleOnChange = (val) => {
    console.log(val)
    if (onChange) onChange(val)
    form.setFieldValue(field.name, val)
  }

  return (
    <FieldGroup
    className={classNames('rich-input-field', className)}
      required={required}
      disabled={disabled}
      error={error}
    >
      <Label fieldName={name} label={label} />
      <Editor
        placeholder={placeholder}
        editorState={field.value || EditorState.createEmpty()}
        toolbarClassName="toolbar"
        wrapperClassName="form-input"
        editorClassName="editWindow"
        onEditorStateChange={handleOnChange}
      />

      <Hint hint={hint} />
      <ErrorMessage error={error} />
    </FieldGroup>
  )
}
