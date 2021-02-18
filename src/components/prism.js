import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-git'

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