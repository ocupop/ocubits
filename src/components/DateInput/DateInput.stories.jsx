/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import DateInput from './DateInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'range', 'twoFields', 'isClearable', 'required', 'disabled'] }
  },
  argTypes: {
    range: {
      description: 'Set to "true" to select a start and an end date.',
      control: 'boolean'
    },
    twoFields: {
      description: 'Set to "true" to display two input fields, one for "start" and one for "end".',
      control: 'boolean',
      if: { arg: 'range', truthy: true }
    },
    isClearable: {
      description: 'Set to "true" to display an [x] icon to clear the value of the date'
    }
  },
  args: {
    name: 'date',
    label: 'Select a Date'
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

export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
