/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import CheckboxGroup from './CheckboxGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/CheckboxGroup',
  component: CheckboxGroup,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'selectedValue', 'allowDeselect', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'radioFieldName',
    label: 'Radio Group Label',
    tooltip: null,
    hint: null,
    className: null,
    initialValues: { },
    allowDeselect: true,
    checkboxes: [
      {
        name: 'option1',
        label: 'Radio Option 1',
        value: 'option 1'
      },
      {
        name: 'option2',
        label: 'Radio Option 2',
        value: 'Option *2'
      },
      {
        name: 'option3',
        label: 'Another Option',
        value: 'option3'
      },
      {
        name: 'chekboxOptionOther',
        label: 'Other',
        value: 'other'
      }
    ],
    required: false,
    disabled: false,
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, allowDeselect, checkboxes, required, disabled, debug }) {
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
        allowDeselect={allowDeselect}
        checkboxes={checkboxes}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})

export const WithHints = Template.bind({})
WithHints.args = {
  checkboxes: [
    {
      name: 'option1',
      label: 'Radio Option 1',
      value: 'option1',
      hint: 'This is your first option.'
    },
    {
      name: 'option2',
      label: 'Radio Option 2',
      value: 'option2',
      hint: 'Another option here.'
    },
    {
      name: 'option3',
      label: 'Another Option',
      value: 'option3',
      hint: 'This is your first option.'
    },
    {
      name: 'option4',
      label: 'Other',
      value: 'other',
      hint: 'My choice is not listed.'
    }
  ]
}

export const WithTooltips = Template.bind({})
WithTooltips.args = {
  checkboxes: [
    {
      name: 'option1',
      label: 'Radio Option 1',
      value: 'option1',
      tooltip: 'This is your first option.'
    },
    {
      name: 'option2',
      label: 'Radio Option 2',
      value: 'option2',
      tooltip: 'Another option here.'
    },
    {
      name: 'option3',
      label: 'Another Option',
      value: 'option3',
      tooltip: 'This is your first option.'
    },
    {
      name: 'option4',
      label: 'Other',
      value: 'other',
      tooltip: 'My choice is not listed.'
    }
  ]
}

export const WithSomeDisabled = Template.bind({})
WithSomeDisabled.args = {
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
}
