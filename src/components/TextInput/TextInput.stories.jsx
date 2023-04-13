/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import TextInput from './TextInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/TextInput',
  component: TextInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'type', 'debug'] }
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'phone', 'email', 'password', 'hidden', 'date', 'time', 'url', 'tel'],
      control: { type: 'select' }
    }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    maskOptions: false,
    type: 'text',
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, maskOptions, type, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={TextInput}
        name={name}
        label={label}
        hint={hint}
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
