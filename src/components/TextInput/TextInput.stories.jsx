import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask'

import TextInput from './TextInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'form', 'field'] }
  },
  argTypes: {
    type: {
      options: ['text', 'number', 'phone', 'email', 'password', 'hidden', 'date', 'time', 'url', 'tel'],
      control: { type: 'select' }
    }
  },
  args: {
    // passed into <Field ...>
    name: 'fieldName',
    label: 'Field Label',
    hint: null,
    placeholder: null,
    className: '',
    required: false,
    maskOptions: false,
    type: 'text',

    // passed into <Formik ...>
    initialValues: { fieldName: '' },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, placeholder, className, initialValues, validationSchema, required, maskOptions, type, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, placeholder, className, required, maskOptions, type }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={TextInput} className={className} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  maskOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  debug: PropTypes.bool
}

export const Basic = Template.bind({})

// export const WithPhoneMask = Template.bind({})
// WithPhoneMask.args = {
//   type: 'phone',
//   maskOptions: [
//     '(',
//     /[1-9]/,
//     /\d/,
//     /\d/,
//     ')',
//     ' ',
//     /\d/,
//     /\d/,
//     /\d/,
//     '-',
//     /\d/,
//     /\d/,
//     /\d/,
//     /\d/
//   ]
// }

// const currencyMask = createNumberMask({
//   prefix: '$',
//   suffix: '',
//   includeThousandsSeparator: true,
//   thousandsSeparatorSymbol: ',',
//   allowDecimal: true,
//   decimalSymbol: '.',
//   decimalLimit: 2, // how many digits allowed after the decimal
//   integerLimit: 5, // limit length of integer numbers
//   requireDecimal: false,
//   allowNegative: false,
//   allowLeadingZeroes: false
// })
// export const WithCurrencyMask = Template.bind({})
// WithCurrencyMask.args = {
//   maskOptions: currencyMask
// }

// export const Password = Template.bind({})
// Password.args = {
//   name: 'pswd',
//   type: 'password',
//   hint: '8+ characters, a number, lowercase, uppercase and a symbol required',
//   validationSchema: Yup.object().shape({
//     pswd: Yup.string()
//       .min(8, 'Password must be 8 characters long')
//       .matches(/[0-9]/, 'Password requires a number')
//       .matches(/[a-z]/, 'Password requires a lowercase letter')
//       .matches(/[A-Z]/, 'Password requires an uppercase letter')
//       .matches(/[^\w]/, 'Password requires a symbol')
//   })
// }

// export const WithEmailMask = Template.bind({})
// WithEmailMask.args = {
//   maskOptions: emailMask,
//   type: 'text' // setting this to "email" breaks the mask
// }
