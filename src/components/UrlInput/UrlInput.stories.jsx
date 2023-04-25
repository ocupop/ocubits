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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'secure'] }
  },
  args: {
    name: 'url',
    label: 'Enter a URL',
    tooltip: null,
    hint: null,
    placeholder: null,
    className: '',
    required: false,
    initialValues: { url: '' },
    debug: false,
    secure: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, secure, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={UrlInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
        secure={secure}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
