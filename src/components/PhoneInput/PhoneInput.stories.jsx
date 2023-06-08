/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import PhoneInput from './PhoneInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'debug', 'disabled', 'format'] },
    docs: {
      description: {
        component: 'US Numbers only. Area code is required. If the initial value is more than 10 characters, all non-number characters are stripped out, and the last 10 digits are used. This should solve for country codes, spaces and parenthesis.'
      }
    }
  },
  argTypes: {
    name: {
      description: 'Name of the variable.'
    },
    label: {}
  },
  args: {
    name: 'phone',
    label: 'Phone Number'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, format, debug }) {
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
        className={className}
        format={format}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
