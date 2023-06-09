/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import NumberInput from './NumberInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'className', 'disabled', 'debug'] }
  },
  args: {
    name: 'nbr',
    label: 'Enter a Number'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, required, initialValues, disabled, debug, maskOptions }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={NumberInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
        maskOptions={maskOptions}
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
export const WithCommas = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    label: 'Enter any large number',
    maskOptions: {
      includeThousandsSeparator: true
    }
  })
}
export const Currency = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    label: 'Enter an Amount',
    maskOptions: {
      prefix: '$',
      includeThousandsSeparator: true,
      decimalLimit: 2,
      integerLimit: 5
    }
  })
}
