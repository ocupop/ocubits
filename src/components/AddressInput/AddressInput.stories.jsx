/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import AddressInput from './AddressInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/AddressInput',
  component: AddressInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'userAddress',
    label: 'Enter Your Address',
    tooltip: null,
    hint: null,
    placeholder: null,
    className: null,
    required: false,
    disabled: false,
    initialValues: { userAddress: '' },
    debug: false,
    maskOptions: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, disabled, maskOptions, debug }) {
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
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={className}
        maskOptions={maskOptions}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
