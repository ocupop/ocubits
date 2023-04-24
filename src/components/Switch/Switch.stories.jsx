/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import Switch from './Switch'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Switch',
  component: Switch,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'helperText', 'required', 'debug'] }
  },
  args: {
    name: 'switchFieldName',
    label: 'Switch Label',
    hint: null,
    helperText: null,
    className: '',
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
        component={Switch}
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
