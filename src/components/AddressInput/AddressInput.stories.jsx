/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import AddressInput from './AddressInput'
// ----------------------------------------------------------------------

export default {
  title: 'Experimental/AddressInput',
  component: AddressInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'userAddress',
    label: 'Enter Your Address'
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, required, disabled, maskOptions, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={AddressInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        required={required}
        disabled={disabled}
        className={className}
        maskOptions={maskOptions}
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
