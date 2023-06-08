/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import CheckboxInput from './CheckboxInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'checkFieldName',
    label: 'Field Label'
  }
}

function Template ({ name, label, hint, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={CheckboxInput}
        className={className}
        name={name}
        label={label}
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
