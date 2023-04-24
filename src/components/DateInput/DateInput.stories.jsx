/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/DateInput',
  component: DateInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'helperText', 'placeholder', 'required', 'initialValues', 'range', 'twoFields', 'isClearable', 'debug'] }
  },
  argTypes: {
    range: { control: 'boolean' },
    twoFields: { control: 'boolean', if: { arg: 'range', truthy: true } }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    hint: null,
    helperText: null,
    placeholder: null,
    className: '',
    required: false,
    initialValues: { },
    range: false,
    twoFields: false,
    isClearable: false,
    debug: false
  }
}

function Template ({ name, label, hint, helperText, placeholder, className, initialValues, required, range, twoFields, isClearable, debug }) {
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
        helperText={helperText}
        placeholder={placeholder}
        required={required}
        className={className}
        range={range}
        twoFields={twoFields}
        isClearable={isClearable}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
