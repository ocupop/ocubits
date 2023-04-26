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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'type', 'debug'] }
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
    tooltip: null,
    hint: null,
    placeholder: null,
    className: null,
    required: false,
    maskOptions: false,
    type: 'text',
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, maskOptions, type, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={MaskedInput}
        name={name}
        label={label}
        tooltip={tooltip}
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
