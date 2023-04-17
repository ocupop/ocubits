/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'DateInput/DateInput_Ant',
  component: DateInput,
  decorators: [withCenteredStory],
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      }
    },
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'picker', 'range'] }
  },
  argTypes: {
    startFrom: {
      control: { type: 'date' }
    },
    picker: { control: 'select', options: ['day', 'week', 'month', 'quarter', 'year'] }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    initialValues: { date: null },
    range: false,
    picker: null,
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, required, initialValues, debug, picker, range }) {
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
        picker={picker}
        range={range}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
