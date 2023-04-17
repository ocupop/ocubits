/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/DateInput_Tailwind',
  component: DateInput,
  decorators: [withCenteredStory],
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      }
    },
    controls: { include: ['name', 'label', 'hint', 'placeholder', 'required', 'initialValues', 'debug', 'asSingle', 'useRange', 'startFrom', 'showShortcuts', 'showFooter', 'dateFormat', 'minDate', 'maxDate'] }
  },
  argTypes: {
    startFrom: {
      control: { type: 'date' }
    }
  },
  args: {
    name: 'date',
    label: 'Select a Date',
    initialValues: { date: '' }
  }
}

function Template ({ name, label, hint, placeholder, className, initialValues, required, debug, asSingle, useRange, startFrom, showShortcuts, showFooter, dateFormat, minDate, maxDate }) {
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
        asSingle={asSingle}
        useRange={useRange}
        startFrom={startFrom}
        showShortcuts={showShortcuts}
        showFooter={showFooter}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
