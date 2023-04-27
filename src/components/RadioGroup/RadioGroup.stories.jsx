/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import RadioGroup from './RadioGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'radios', 'label', 'tooltip', 'hint', 'selectedValue', 'className', 'required', 'disabled', 'debug'] }
  },
  argTypes: {
    name: {
      description: 'Name of the variable.'
    },
    radios: {
      name: 'radios',
      description: 'An array of objects. Each object represents a radio, and can contain parameters for "label", "value", "hint", "tooltip", "classname" and "disabled"',
      control: {
        type: null
      }
    }
  },
  args: {
    name: 'radioFieldName',
    label: 'Radio Group Label',
    radios: [
      {
        label: 'Radio Option 1',
        value: 'option 1'
      },
      {
        label: 'Radio Option 2',
        value: 'Option *2'
      },
      {
        label: 'Another Option',
        value: 'option3'
      },
      {
        label: 'Other',
        value: 'other'
      }
    ]
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, radios, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={RadioGroup}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        radios={radios}
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

export const WithHints = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    radios: [
      {
        label: 'Radio Option 1',
        value: 'option1',
        hint: 'This is your first option.',
        tooltip: null,
        className: null
      },
      {
        label: 'Radio Option 2',
        value: 'option2',
        hint: 'Another option here.'
      },
      {
        label: 'Another Option',
        value: 'option3',
        hint: 'This is your first option.'
      },
      {
        label: 'Other',
        value: 'other',
        hint: 'My choice is not listed.'
      }
    ]
  })
}

export const WithTooltips = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    radios: [
      {
        label: 'Radio Option 1',
        value: 'option1',
        tooltip: 'This is your first option.'
      },
      {
        label: 'Radio Option 2',
        value: 'option2',
        tooltip: 'Another option here.'
      },
      {
        label: 'Another Option',
        value: 'option3',
        tooltip: 'This is your first option.'
      },
      {
        label: 'Other',
        value: 'other',
        tooltip: 'My choice is not listed.'
      }
    ]
  })
}
export const WithSomeDisabled = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug,
    radios: [
      {
        label: 'Radio Option 1',
        value: 'option1',
        disabled: true
      },
      {
        label: 'Radio Option 2',
        value: 'option2'
      },
      {
        label: 'Another Option',
        value: 'option3',
        disabled: true
      },
      {
        label: 'Other',
        value: 'other'
      }
    ]
  })
}
