/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import PhoneInput from './PhoneInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/PhoneInput',
  component: PhoneInput,
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
