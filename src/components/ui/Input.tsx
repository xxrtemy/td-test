"use client"

import React from 'react'
import { InputProps } from '@/types'
import { IoSearch } from "react-icons/io5";


const Input = ({type, placeholder, onChange, value}: InputProps) => {
  return (
    <div style={{position: "relative"}}>
        <IoSearch style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}/>
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className=''
            value={value}
            style={{ paddingLeft: "35px", width: "100%", paddingBottom: "12px", paddingTop: "12px", border: "1px solid rgba(145, 158, 171, 0.32)", borderRadius:"6px"}} 
        />
    </div>
  )
}

export default Input