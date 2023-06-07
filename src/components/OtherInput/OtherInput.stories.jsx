/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import OtherInput from './OtherInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/OtherInput',
  component: OtherInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'className', 'label', 'hint', 'placeholder', 'required', 'disabled'] }
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
    name: 'the-other-value',
    label: 'Enter Your Own Value'
  }
}

function Template ({
  name,
  className,
  label,
  hint,
  placeholder,
  required,
  disabled,
  initialValues,
  debug
}) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={OtherInput}
        name={name}
        className={className}
        label={label}
        hint={hint}
        placeholder={placeholder}
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
