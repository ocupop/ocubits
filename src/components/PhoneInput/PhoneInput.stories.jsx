/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import PhoneInput from './PhoneInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/PhoneInput',
  component: PhoneInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  argTypes: {
    format: { control: 'select', options: ['usParens', 'usNoAreaCode', 'international'] }
  },
  args: {
    name: 'phone',
    label: 'Phone Number',
    hint: '',
    placeholder: 'Enter your Phone',
    className: '',
    required: false,
    format: 'usParens',
    initialValues: { phone: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, format, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={PhoneInput}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
        format={format}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
