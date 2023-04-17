/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/DateInput_Carbon',
  component: DateInput,
  decorators: [withCenteredStory],
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      }
    },
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'type'] }
  },
  argTypes: {
    startFrom: {
      control: { type: 'date' }
    },
    type: { control: 'select', options: ['simple', 'single', 'range'] }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    initialValues: { date: null },
    type: 'single',
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, required, initialValues, debug, type }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={DateInput}
        name={name}
        label={label}
        hint={hint}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
