/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import TextArea from './TextArea'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/TextArea',
  component: TextArea,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'rows', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label',
    tooltip: null,
    hint: null,
    placeholder: null,
    className: null,
    rows: 4,
    required: false,
    disabled: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, rows, required, disabled, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={TextArea}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
