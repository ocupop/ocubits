/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import EmailInput from './EmailInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/EmailInput',
  component: EmailInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'email',
    label: 'Email Address'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={EmailInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
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
