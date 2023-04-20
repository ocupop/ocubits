/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import MaskedInput from './MaskedInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/MaskedInput',
  component: MaskedInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'helperText', 'placeholder', 'required', 'initialValues', 'type', 'debug'] }
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'tel', 'email', 'password', 'hidden', 'date', 'time', 'url'],
      control: { type: 'select' }
    }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label',
    hint: '',
    helperText: null,
    placeholder: '',
    className: '',
    required: false,
    maskOptions: false,
    type: 'text',
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, hint, helperText, placeholder, className, initialValues, required, maskOptions, type, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={MaskedInput}
        name={name}
        label={label}
        hint={hint}
        helperText={helperText}
        placeholder={placeholder}
        required={required}
        className={className}
        maskOptions={maskOptions}
        type={type}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
