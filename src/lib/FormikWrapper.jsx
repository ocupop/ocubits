import React from 'react'
import PropTypes from 'prop-types'
import FormikDebug from './FormikDebug'
import { Formik, Form } from 'formik'
// ----------------------------------------------------------------------
FormikWrapper.propTypes = {
  children: PropTypes.node,
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.instanceOf(Object)
}
FormikWrapper.defaultProps = {
  children: null,
  initialValues: {},
  validationSchema: {}
}


export default function FormikWrapper({ children, initialValues, validationSchema, handleSubmit }) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          {children}
          <FormikDebug />
        </Form>
      )}
    </Formik>
  )
}
