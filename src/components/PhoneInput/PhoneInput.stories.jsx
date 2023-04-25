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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'format'] }
  },
  argTypes: {
    format: { control: 'select', options: ['usParens', 'usNoAreaCode', 'international', null] }
  },
  args: {
    name: 'phone',
    label: 'Phone Number',
    tooltip: '',
    hint: null,
    placeholder: 'Enter your Phone',
    className: '',
    required: false,
    format: 'usParens',
    initialValues: { phone: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, format, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={PhoneInput}
        name={name}
        label={label}
        tooltip={tooltip}
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
