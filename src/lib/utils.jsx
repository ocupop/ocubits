import { getIn } from 'formik'

export const fieldStatus = ({
  field: { name },
  form: { errors, touched }
}) => {
  return getIn(touched, name) && getIn(errors, name) ? getIn(errors, name) : null
}

/**
   * removeProtocol
   * @param  {[string]} url [a URL string value]
   * @return {[string]} [the URL with the "http://" or"https://" removed]
   */
export function removeProtocol (url) {
  if (!url || url === '' || typeof url !== 'string') return ''
  return url
    .replace(/(^\w+:|^)\/\//, '') // remove protocol
    .trim() // trim
    .replace(/\s/g, '') // remove spaces
}
