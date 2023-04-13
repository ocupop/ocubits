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
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    initialValues: { fieldName: '' },
    debug: false,
    maskOptions: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, maskOptions, debug }) {
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
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
