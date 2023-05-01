/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import CheckboxGroup from './CheckboxGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['checkboxes', 'name', 'label', 'tooltip', 'hint', 'selectedValue', 'className', 'required', 'disabled', 'debug'] }
  },
  argTypes: {
    checkboxes: {
      name: 'checkboxes',
      description: 'An array of objects. Each object represents a checkbox, and can contain parameters for "label", "value", "hint", "tooltip", "classname" and "disabled"',
      control: {
        type: null
      }
    }
  },
  args: {
    name: 'checkboxGroupName',
    label: 'Checkbox Group Label',
    checkboxes: [
      {
        name: 'option1',
        label: 'Radio Option 1',
        value: 'option 1'
      },
      {
        name: 'option2',
        label: 'Radio Option 2',
        value: 'Option 2'
      },
      {
        name: 'option3',
        label: 'Another Option',
        value: 'option 3'
      },
      {
        name: 'chekboxOptionOther',
        label: 'Other',
        value: 'other'
      }
    ]
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, checkboxes, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={CheckboxGroup}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        checkboxes={checkboxes}
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
    checkboxes: [
      {
        name: 'option1',
        label: 'Checkbox Option 1',
        value: 'option1',
        hint: 'This is your first option.'
      },
      {
        name: 'option2',
        label: 'Checkbox Option 2',
        value: 'option2',
        hint: 'Another option here.'
      },
      {
        name: 'option3',
        label: 'Another Option',
        value: 'option3',
        hint: 'This is your third option.'
      },
      {
        name: 'option4',
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
    checkboxes: [
      {
        name: 'option1',
        label: 'Checkbox Option 1',
        value: 'option1',
        tooltip: 'This is your first option.'
      },
      {
        name: 'option2',
        label: 'Checkbox Option 2',
        value: 'option2',
        tooltip: 'Another option here.'
      },
      {
        name: 'option3',
        label: 'Checkbox Option',
        value: 'option3',
        tooltip: 'This is your third option.'
      },
      {
        name: 'option4',
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
    checkboxes: [
      {
        name: 'option1',
        label: 'Radio Option 1',
        value: 'option1',
        disabled: true
      },
      {
        name: 'option2',
        label: 'Radio Option 2',
        value: 'option2'
      },
      {
        name: 'option3',
        label: 'Another Option',
        value: 'option3',
        disabled: true
      },
      {
        name: 'option4',
        label: 'Other',
        value: 'other'
      }
    ]
  })
}
