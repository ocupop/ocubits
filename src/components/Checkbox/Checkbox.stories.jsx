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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'required', 'debug'] }
  },
  args: {
    name: 'checkFieldName',
    label: 'Field Label',
    tooltip: null,
    hint: null,
    className: null,
    initialValues: { checkFieldName: '' },
    debug: false,
    required: false
  }
}

function Template ({ name, label, tooltip, hint, className, required, initialValues, debug }) {
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
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
