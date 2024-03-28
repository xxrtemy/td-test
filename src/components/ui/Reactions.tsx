"use client"

import React from 'react'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { incrementLikes, incrementDislikes } from "@/redux/slices/postsSlice";
import { ReactionsProps } from '@/types';


const blockStyles = {
  display: "flex", 
  gap: "10px", 
  alignItems: "center" 
}

const Reactions = ({id, likes, dislikes, isDisLiked, isLiked}: ReactionsProps) => {
  const dispatch = useAppDispatch();


  const handleLike = () => {
    dispatch(incrementLikes(id))
  }
  const handleDisLike = () => {
    dispatch(incrementDislikes(id))
  }

  return (
    <div style={{display: "flex", gap: "24px"}}>
        <div style={blockStyles}>
          <BiSolidLike onClick={handleLike} style={{cursor: "pointer", color: `${isLiked ? "green" : ""}`}}/>
          <span>{likes}</span>
        </div>
        <div style={blockStyles}>
          <BiSolidDislike onClick={handleDisLike} style={{cursor: "pointer", color: `${isDisLiked ? "red" : ""}`}} />
          <span>{dislikes}</span>
        </div>
    </div>
  )
}

export default Reactions