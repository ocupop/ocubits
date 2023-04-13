/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import NumberInput from './NumberInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/NumberInput',
  component: NumberInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'nbr',
    label: 'Enter a Number',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    maskOptions: {},
    initialValues: { nbr: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, required, maskOptions, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={NumberInput}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        maskOptions={maskOptions}
        className={className}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
