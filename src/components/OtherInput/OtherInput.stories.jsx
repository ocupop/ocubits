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
    controls: { include: ['name', 'className', 'label', 'hint', 'placeholder', 'required', 'disabled', 'inputType'] },
    docs: {
      description: {
        component: 'When unchecked, the value of the text box will be removed from formik values, but rememebered in case the input is re-checked by the user.'
      }
    }
  },
  argTypes: {
    name: {
      description: 'Name of the variable.'
    },
    inputType: {
      description: 'Type of form input'
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
  inputType,
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
        inputType={inputType}
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
