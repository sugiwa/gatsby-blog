import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default ({langname, children}) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <pre>
      <code className={`language-${langname}`}>
        {children}
      </code>
    </pre>
  )
}