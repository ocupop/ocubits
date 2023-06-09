/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import TextInput from './TextInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'className', 'disabled', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={TextInput}
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
