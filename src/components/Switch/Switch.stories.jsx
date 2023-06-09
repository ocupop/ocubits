/* eslint-disable react/prop-types */

import { Field } from 'formik'

import { FormikWrapper } from '@lib'
import Switch from './Switch'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['name', 'label', 'tooltip', 'hint', 'className', 'required', 'disabled', 'debug'] }
  },
  args: {
    name: 'switchFieldName',
    label: 'Switch Label'
  }
}

function Template ({ name, label, tooltip, hint, className, required, disabled, initialValues, debug }) {
  return (
    <FormikWrapper
      initialValues={initialValues}
      debug={debug}
    >
      <Field
        component={Switch}
        className={className}
        name={name}
        label={label}
        tooltip={tooltip}
        hint={hint}
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
