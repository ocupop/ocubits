import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import NumberInput from './NumberInput'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'type', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'nbr',
    label: 'Enter a Number',
    hint: null,
    placeholder: null,
    className: '',
    required: false,
    maskOptions: {},

    // passed into <Formik ...>
    initialValues: { nbr: '' },
    // validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, placeholder, className, required, maskOptions, initialValues, validationSchema, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, placeholder, className, required, maskOptions }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={NumberInput} className={className} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  maskOptions: PropTypes.object,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  debug: PropTypes.bool
}

export const Basic = Template.bind({})

// export const CustomMask = Template.bind({})
// CustomMask.args = {
//   initialValues: { nbr: '100.00' },
//   maskOptions: {
//     prefix: '$',
//     suffix: '',
//     includeThousandsSeparator: true,
//     thousandsSeparatorSymbol: ',',
//     allowDecimal: true,
//     decimalSymbol: '.',
//     decimalLimit: 2, // how many digits allowed after the decimal
//     integerLimit: 7, // limit length of integer numbers
//     requireDecimal: true,
//     allowNegative: false,
//     allowLeadingZeroes: false
//   },
//   validationSchema: Yup.object().shape({
//     nbr: Yup
//       .number()
//       .transform((_value, originalValue) => Number(originalValue.replace('$', '').replace(/,/g, '')))
//       .min(100, 'not Enough!')
//       .max(1200, 'Too Much!')
//       .typeError('you must specify a number')
//       .required('Required')
//   })
// }
