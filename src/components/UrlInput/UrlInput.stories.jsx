/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import UrlInput from './UrlInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/UrlInput',
  component: UrlInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'url',
    label: 'Enter a URL',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    initialValues: { url: '' },
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
        component={UrlInput}
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
