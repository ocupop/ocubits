/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import DraftJS from './DraftJS'
// ----------------------------------------------------------------------

export default {
  title: 'Experimental/DraftJS',
  component: DraftJS,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'placeholder', 'className', 'required', 'debug'] }
  },
  args: {
    name: 'fieldName',
    label: 'Enter your message'
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
export const Basic = {
  render: (args, { globals: { debug } }) => Template({
    ...args,
    debug
  })
}
