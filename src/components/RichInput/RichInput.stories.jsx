/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import RichInput from './RichInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/RichInput',
  component: RichInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message',
    tooltip: null,
    hint: null,
    placeholder: 'Enter your text here.',
    className: null,
    required: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RichInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
