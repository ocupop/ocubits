import React from 'react'
import PropTypes, { bool } from 'prop-types'
import FormikDebug from './FormikDebug'
import { Formik, Form } from 'formik'
// ----------------------------------------------------------------------
FormikWrapper.propTypes = {
  children: PropTypes.node,
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.instanceOf(Object),
  debug: PropTypes.bool
}
FormikWrapper.defaultProps = {
  children: null,
  initialValues: {},
  validationSchema: false,
  debug: false
}

export default function FormikWrapper ({ children, debug, initialValues, validationSchema }) {
  return (
    <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema}>
      {() => (
        <Form>
          {children}
          {debug && <input type="submit" name="submit" value="Submit"/> }
          {debug && <FormikDebug /> }
        </Form>
      )}
    </Formik>
  )
}
