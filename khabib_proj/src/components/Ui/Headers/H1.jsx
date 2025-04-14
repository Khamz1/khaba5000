import React from 'react'
import S from './h1.module.css'

export default function H1({children, className, ...rest}) {
  return (
    <h1 className={`${S.h1} ${className} `}{...rest}>{children}</h1>
  )
}
