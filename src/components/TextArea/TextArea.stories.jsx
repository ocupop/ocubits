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
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'rows', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label',
    hint: '',
    placeholder: '',
    className: '',
    rows: 4,
    required: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, rows, required, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={TextArea}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
        rows={rows}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
