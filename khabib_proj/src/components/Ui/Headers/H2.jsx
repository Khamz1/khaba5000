import React from 'react'
import S from './h1.module.css'

export default function H2({className, children, ...rest}) {
  return (
    <h2 className={`${S.h2} ${className}`} {...rest}>{children}</h2>
  )
}
