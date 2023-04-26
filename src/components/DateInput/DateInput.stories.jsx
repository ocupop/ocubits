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
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'range', 'twoFields', 'isClearable', 'required', 'disabled', 'debug'] }
  },
  argTypes: {
    range: { control: 'boolean' },
    twoFields: { control: 'boolean', if: { arg: 'range', truthy: true } }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    tooltip: null,
    hint: null,
    placeholder: null,
    className: null,
    initialValues: { },
    range: false,
    twoFields: false,
    isClearable: false,
    required: false,
    disabled: false,
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, range, twoFields, isClearable, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={DateInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
        range={range}
        twoFields={twoFields}
        isClearable={isClearable}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
