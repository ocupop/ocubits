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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message',
    tooltip: null,
    hint: null,
    placeholder: 'Enter your text here.',
    className: null,
    required: false,
    disabled: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, debug }) {
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
        disabled={disabled}
        className={className}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
