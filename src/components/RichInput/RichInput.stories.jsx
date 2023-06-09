/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import RichInput from './RichInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/RichInput',
  component: RichInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RichInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={className}
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
