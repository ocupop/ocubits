/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import CheckboxInput from './Checkbox'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'checkFieldName',
    label: 'Field Label'
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={CheckboxInput}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
