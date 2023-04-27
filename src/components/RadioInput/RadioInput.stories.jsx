/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import RadioInput from './RadioInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Radio',
  component: RadioInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'value', 'tooltip', 'hint', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'radioFieldName',
    label: 'Radio Label',
    value: 'Hello World'
  }
}

function Template ({ name, label, value, tooltip, hint, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RadioInput}
        className={className}
        name={name}
        label={label}
        value={value}
        tooltip={tooltip}
        hint={hint}
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
