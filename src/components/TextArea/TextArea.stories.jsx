/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import TextArea from './TextArea'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'rows', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, rows, required, disabled, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={TextArea}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
