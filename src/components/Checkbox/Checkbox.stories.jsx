/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import CheckboxInput from './Checkbox'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Checkbox',
  component: CheckboxInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'helperText', 'required', 'debug'] }
  },
  args: {
    name: 'checkFieldName',
    label: 'Field Label',
    hint: null,
    helperText: null,
    className: null,
    initialValues: { },
    debug: false,
    required: false
  }
}

function Template ({ name, label, hint, helperText, className, required, initialValues, debug }) {
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
        hint={hint}
        helperText={helperText}
        required={required}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
