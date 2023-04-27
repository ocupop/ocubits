/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import MaskedInput from './MaskedInput'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs'],
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'disabled', 'type', 'debug', 'maskOptions'] }
  },
  argTypes: {
    maskOptions: {
      description: 'An array or a function that defines how the user input is going to be masked. <a href="https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme" target="_blank">See Docs</a>',
      control: {
        type: null
      }
    },
    type: {
      description: 'The "type" to be applied to the input field.',
      options: ['text', 'number', 'tel', 'email', 'password', 'hidden', 'date', 'time', 'url'],
      control: { type: 'select' }
    }
  },
  args: {
    name: 'fieldName',
    label: 'Field Label'
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, maskOptions, type, required, disabled, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={MaskedInput}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        className={className}
        maskOptions={maskOptions}
        type={type}
        required={required}
        disabled={disabled}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
