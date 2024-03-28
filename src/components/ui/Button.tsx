"use client"

import React from 'react'

import { ButtonProps } from '@/types'

const Button = ({title, handleClick, btnType }: ButtonProps) => {
  return (
    <button
        disabled={false}
        type={ btnType || "button"}
        style={{cursor:"pointer", alignSelf: "end", width: "150px", padding: "14px 24px 12px 24px", gap: "10px", borderRadius: "60px", border: "2px solid black", opacity: "0px", backgroundColor: "white"}}
        onClick={handleClick}
    >
        <span className={'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default Button