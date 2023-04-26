/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import RadioInput from './RadioInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Radio',
  component: RadioInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'required', 'debug', 'value'] }
  },
  args: {
    name: 'radioFieldName',
    label: 'Radio Label',
    tooltip: null,
    hint: null,
    className: null,
    initialValues: { },
    debug: false,
    required: false,
    value: 'Hello World'
  }
}

function Template ({ name, label, tooltip, hint, className, required, initialValues, debug, value }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RadioInput}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        required={required}
        value={value}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
