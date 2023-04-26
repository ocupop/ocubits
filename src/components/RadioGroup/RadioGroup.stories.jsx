/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import RadioGroup from './RadioGroup'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/RadioGroup',
  component: RadioGroup,
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
    ],
    required: false,
    disabled: false,
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, className, initialValues, allowDeselect, radios, required, disabled, debug }) {
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
        allowDeselect={allowDeselect}
        radios={radios}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})

export const WithHints = Template.bind({})
WithHints.args = {
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
}

export const WithTooltips = Template.bind({})
WithTooltips.args = {
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
}

export const WithSomeDisabled = Template.bind({})
WithSomeDisabled.args = {
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
}
