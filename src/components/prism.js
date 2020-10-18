import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default ({langname, children}) => {
  useEffect(() => {
    console.log(Prism.highlightAll());
    Prism.highlightAll()
  })

  return (
    <pre className='line-numbers'>
      <code className={`language-${langname}`}>
        {children}
      </code>
    </pre>
  )
}