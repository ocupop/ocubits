/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import EmailInput from './EmailInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/EmailInput',
  component: EmailInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'email',
    label: 'Email Address',
    tooltip: '',
    hint: null,
    placeholder: '',
    required: false,
    className: '',
    initialValues: { email: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, required, className, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={EmailInput}
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
