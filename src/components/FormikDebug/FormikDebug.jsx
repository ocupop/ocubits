import React, { useState } from 'react'
import { FormikConsumer } from 'formik'
import './FormikDebug.css'

const FormikDebug = () => {
  const [show, setShow] = useState(true)
  // if (!process?.env?.REACT_APP_SHOW_FORMIK_DEBUG) return <></>
  return (
    <FormikConsumer>
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <div className="formik-debug">
          <div className="uppercase bg-black text-white p-3">
            Formik State
            <button className="float-right" onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          {show && (
            <pre className="p-10 text-xs overflow-auto">
              {JSON.stringify(rest, null, 2)}
            </pre>
          )}
        </div>
      )}
    </FormikConsumer>
  )
}

export default FormikDebug
