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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'email',
    label: 'Email Address',
    tooltip: null,
    hint: null,
    placeholder: null,
    required: false,
    disabled: false,
    className: null,
    initialValues: { email: '' },
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
        component={EmailInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
