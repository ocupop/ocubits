import React from 'react'
import PropTypes from 'prop-types'
import { EditorState, setEditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './RichInput.css'
// ----------------------------------------------------------------------

RichInput.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  hint: PropTypes.string,
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
  hint,
  label,
  required,
  placeholder,
  field,
  form,
  form: { errors, touched },
  onChange
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const handleOnChange = (val) => {
    console.log(val)
    if (onChange) onChange(val)
    form.setFieldValue(field.name, val)
  }

  return (
    <div className={`ocu-richinput form-group ${className} ${status}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <Editor
        placeholder={placeholder}
        editorState={field.value || EditorState.createEmpty()}
        toolbarClassName="toolbar"
        wrapperClassName="wrapperClassName"
        editorClassName="editWindow"
        onEditorStateChange={handleOnChange}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
