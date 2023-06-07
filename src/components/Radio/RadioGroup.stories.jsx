/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import RadioGroup from './RadioGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'value', 'tooltip', 'hint', 'className', 'required', 'disabled', 'options', 'debug'] }
  },
  argTypes: {
    value: {
      description: 'Value to pass if the radio is checked.'
    }
  },
  args: {
    name: 'radioFieldName',
    label: 'Radio Label',
    value: 'Hello World',
    options: [
      {
        value: 'valueA',
        label: 'Radio 1',
        hint: null
      },
      {
        value: 'valueB',
        label: 'Radio 2',
        hint: null
      },
      {
        value: 'valueC',
        label: 'Radio 3',
        hint: null
      }
    ]
  }
}

function Template ({ name, label, value, options, hint, className, required, initialValues, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RadioGroup}
        className={className}
        name={name}
        label={label}
        value={value}
        options={options}
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
