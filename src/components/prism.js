import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default ({children}) => {
  useEffect(() => {
    console.log(Prism.highlightAll());
    Prism.highlightAll()
  })

  return (
    <pre className="language-javascript">
      <code>
        {children}
      </code>
    </pre>
  )
}