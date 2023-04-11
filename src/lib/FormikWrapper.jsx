import React from 'react'
import PropTypes, { bool } from 'prop-types'
import FormikDebug from './FormikDebug'
import { Formik, Form } from 'formik'
// ----------------------------------------------------------------------
FormikWrapper.propTypes = {
  children: PropTypes.node,
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.instanceOf(Object),
  onSubmit: PropTypes.func,
  includeSubmitButton: PropTypes.bool
}
FormikWrapper.defaultProps = {
  children: null,
  initialValues: {},
  validationSchema: {},
  onSubmit: () => null,
  includeSubmitButton: false
}

export default function FormikWrapper ({ children, initialValues, validationSchema, onSubmit, includeSubmitButton }) {
  return (
    <div className="border border-solid border-primary">
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {children}
          {includeSubmitButton && <input type="submit" name="submit" value="Submit"/> }
          <FormikDebug />
        </Form>
      )}
    </Formik>
    </div>
  )
}
