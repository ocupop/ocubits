/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'DateInput/DateInput_ReactDatepicker',
  component: DateInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'range', 'twoFields', 'isClearable', 'debug'] }
  },
  argTypes: {
    range: { control: 'boolean' },
    twoFields: { control: 'boolean', if: { arg: 'range', truthy: true } }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    hint: '',
    placeholder: '',
    className: '',
    required: false,
    initialValues: { },
    range: false,
    twoFields: false,
    isClearable: false,
    debug: false
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, range, twoFields, isClearable, debug }) {
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
        className={className}
        range={range}
        twoFields={twoFields}
        isClearable={isClearable}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
