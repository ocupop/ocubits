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
    controls: { include: ['name', 'label', 'hint', 'helperText', 'placeholder',, 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'nbr',
    label: 'Enter a Number',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    initialValues: { nbr: '' },
    debug: false,
    maskOptions: false
  }
}

function Template ({ name, label, hint, placeholder, className, required, initialValues, debug, maskOptions }) {
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
        className={className}
        maskOptions={maskOptions}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})

export const WithCommas = Template.bind({})
WithCommas.args = {
  label: 'Enter any large number',
  maskOptions: {
    includeThousandsSeparator: true
  }
}

export const Currency = Template.bind({})
Currency.args = {
  label: 'Enter an Amount',
  maskOptions: {
    prefix: '$',
    includeThousandsSeparator: true,
    decimalLimit: 2,
    integerLimit: 5
  }
}
