import React from 'react'
import { Field } from 'formik'
import { FormikWrapper } from '@lib'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import CheckboxInput from './Checkbox'
import { withCenteredStory } from '@lib/withCenteredStory'
// ----------------------------------------------------------------------

export default {
  title: 'Fields/Checkbox',
  component: CheckboxInput,
  decorators: [withCenteredStory],
  parameters: {
    controls: { exclude: ['className', 'validationSchema', 'innerRef', 'type', 'form', 'field'] }
  },
  args: {
    // passed into <Field ...>
    name: 'checkFieldName',
    label: 'Field Label',
    hint: null,
    className: '',

    // passed into <Formik ...>
    initialValues: { checkFieldName: true },
    validationSchema: false,

    // Passed into <FormikWrapper...>
    debug: false
  }
}

const Template = ({ name, label, hint, className, required, initialValues, validationSchema, debug }) => {
  const formik = { initialValues, validationSchema, debug }
  const field = { name, label, hint, className, required }
  return (
    <FormikWrapper {...formik}>
      <Field {...field} component={CheckboxInput} className={className} />
    </FormikWrapper>
  )
}
Template.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  debug: PropTypes.bool
}

export const Basic = Template.bind({})

export const WithOverrides = Template.bind({})
WithOverrides.args = {
  name: 'likeCake',
  label: 'Do you like cake?',
  hint: 'Check here if you do.',
  className: 'blammo',
  required: false,
  initialValues: { likeCake: true },
  validationSchema: Yup.object().shape({
    likeCake: Yup.boolean().oneOf([true], 'You must check this box')
  }),
  debug: true
}
