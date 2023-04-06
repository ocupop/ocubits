import React, { useState } from 'react'
import { FormikConsumer } from 'formik'
// ----------------------------------------------------------------------

const FormikDebug = () => {
  const [open, setOpen] = useState(false)

  if (!process.env.NODE_ENV === 'development') return <></>
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
        className="bg-transparent text-primary">
        <span>{open ? '-' : '+'}</span> debug
      </button>
      {open && (
        <div className="p-5 text-white bg-dark">
          <h4>Formik Debugger</h4>
          <FormikConsumer>
            {({ validationSchema, validate, onSubmit, ...rest }) => (
              <pre
                style={{
                  fontSize: '.65rem',
                  padding: '.25rem .5rem',
                  overflowX: 'scroll'
                }}>
                {JSON.stringify(rest, null, 2)}
              </pre>
            )}
          </FormikConsumer>
        </div>
      )}
    </>
  )
}

export default FormikDebug
