import React from 'react'
import PropTypes, { bool } from 'prop-types'
import { Formik, Form } from 'formik'
import { FormikDebug } from '@components'
// ----------------------------------------------------------------------
FormikWrapper.propTypes = {
  children: PropTypes.node,
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.object,
  debug: PropTypes.bool
}
FormikWrapper.defaultProps = {
  children: null,
  initialValues: {},
  validationSchema: null,
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
