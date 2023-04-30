/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import CheckboxWithText from './CheckboxWithText'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/CheckboxWithText',
  component: CheckboxWithText,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'debug', 'disabled', 'format'] }
  },
  argTypes: {
    name: {
      description: 'Name of the variable.'
    },
    label: {},
    format: {
      control: 'select',
      options: ['usParens', 'usNoAreaCode', null],
      description: 'Supported formats include usParens (xxx) xxx-xxx and usNoAreaCode xxx-xxx'
    }
  },
  args: {
    name: 'other',
    label: 'Other',
    hint: 'Check this box to enter some custom text'
    // tooltip: "Don't see what you want? Enter it in here."
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, format, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={CheckboxWithText}
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
