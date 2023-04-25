/* eslint-disable react/prop-types */
import React from 'react'
import { Field } from 'formik'

import { FormikWrapper, withCenteredStory } from '@lib'
import DraftJS from './DraftJS'
// ----------------------------------------------------------------------

export default {
  title: 'Experimental/DraftJS',
  component: DraftJS,
  decorators: [withCenteredStory],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'required', 'initialValues', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message',
    tooltip: '',
    hint: '',
    placeholder: 'Enter your text here.',
    className: '',
    required: false,
    initialValues: { fieldName: '' },
    debug: false
  }
}

function Template ({ name, label, tooltip, hint, placeholder, className, initialValues, required, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={DraftJS}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </FormikWrapper>
  )
}

export const Basic = Template.bind({})
