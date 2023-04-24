import React from 'react'
import PropTypes from 'prop-types'
import { EditorState, setEditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { getIn } from 'formik'

import Label from '../Label/Label'
import './DraftJS.css'
// ----------------------------------------------------------------------

DraftJS.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object),
  onChange: PropTypes.func
}

DraftJS.defaultProps = {
  className: '',
  theme: 'snow',
  required: false,
  placeholder: ''
}

export default function DraftJS ({
  className,
  hint,
  helperText,
  label,
  required,
  placeholder,
  field,
  form,
  form: { errors, touched },
  onChange
}) {
  const status = getIn(touched, field.name) && getIn(errors, field.name) ? 'invalid' : ''
  const doOnChange = (val) => {
    console.log(val)
    if (onChange) onChange(val)
    form.setFieldValue(field.name, val)
  }

  return (
    <div className={`ocufield ocu-draftjs form-group ${className} ${status}`}>
      <Label label={label} hint={hint} htmlFor={field.name} required={required}/>
      <Editor
        placeholder={placeholder}
        editorState={field.value || EditorState.createEmpty()}
        toolbarClassName="toolbar"
        wrapperClassName="form-input"
        editorClassName="editWindow"
        onEditorStateChange={doOnChange}
      />
      {helperText && <div className='helper'>{helperText}</div>}
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <small className="form-validation-error">{getIn(errors, field.name)}</small>
      )}
    </div>
  )
}
