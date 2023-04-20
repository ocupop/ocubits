/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import RichInput from './RichInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/DraftJS',
  component: RichInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message',
    hint: '',
    placeholder: 'Enter your text here.',
    className: '',
    required: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RichInput}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
