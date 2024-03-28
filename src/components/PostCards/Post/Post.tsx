"use client"

import Button from '@/components/ui/Button'
import Reactions from '@/components/ui/Reactions'
import React from 'react'
import { useAppDispatch } from '@/redux/hooks';
import { openPost } from "@/redux/slices/postsSlice";
import { useNavigate } from 'react-router-dom';

const Post = ({postId, title, content, className, likes, dislikes, isLiked, isDisliked }: { isLiked: boolean, isDisliked: boolean, likes: number, dislikes:number, postId: number, title: string, content: string, className: string}) => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const handleClick = () => {
    dispatch(openPost(postId));
    nav('/post')
  }


  return (
    <div className={className} style={{ display:"flex", flexDirection: "column", gap: "24px", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.04)", border: "1px solid rgba(244, 244, 244, 1)"}}>
        <img src="https://placehold.co/600x400?text=Hello\nWorld" alt="postImg"/>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "0px 16px 32px 16px"}}>
          <div>
            <h2 style={{fontSize: "28px", fontWeight: "700", lineHeight: "32px", textAlign: "left"}}>
              {title}
            </h2>
          </div>
            <p style={{fontSize: "24px", fontWeight: "400", lineHeight: "32px", textAlign: "left"}}>
              {content}
            </p> 
            <div style={{display: "flex", justifyContent: 'space-between' }}>
              <Reactions
                likes={likes}
                dislikes={dislikes}
                isLiked={isLiked}
                isDisLiked={isDisliked}
                id={postId}
              />
              <Button
                title='Читать далее'
                handleClick={handleClick}
              />
            </div>
          </div>
    </div>
  )
}

export default Post