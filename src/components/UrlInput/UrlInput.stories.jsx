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
    controls: { include: ['name', 'label', 'hint', 'helperText', 'placeholder',, 'required', 'initialValues', 'debug', 'format'] }
  },
  argTypes: {
    format: { control: 'select', options: ['usParens', 'usNoAreaCode', 'international', null] }
  },
  args: {
    name: 'url',
    label: 'Enter URL',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    initialValues: { phone: '' },
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, debug }) {
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
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
