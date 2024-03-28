"use client"

import Reactions from '@/components/ui/Reactions'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { useNavigate } from 'react-router-dom'
import { CgArrowLeft } from "react-icons/cg";


const PostPage = () => {
  const postId = useAppSelector((state) => state.posts.postId),
    post = useAppSelector((state) => state.posts.postsItems.find(item => item.id === postId));
  const nav = useNavigate()

  return (
    <div>
      {postId ? (
              <div style={{display: "flex", flexDirection: "column", gap: "32px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div style={{cursor: "pointer", width: "fit-content", display: "flex", gap: "10px", alignItems: "center"}}>
                    <CgArrowLeft style={{scale:"1.3" }} />
                    <p onClick={() => nav('/')} style={{cursor: "pointer"}}>Вернуться к статьям</p>
                  </div>
                  <Reactions
                    likes={post?.likes}
                    dislikes={post?.dislikes}
                    isLiked={post?.isLiked}
                    isDisLiked={post?.isDisliked}
                  />
                </div>
                <div  style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "48px"}}>
                  <h1>{post?.title}</h1>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "48px", width: "min-content"}}>
                    <img src="https://placehold.co/600x400?text=Hello\nWorld" alt="postImg"/>
                    <p>{post?.body}</p>
                  </div>
                </div>
              </div>
            ) : 
            (
              <p>No post found</p>
            )
      }
    </div>
  )
}

export default PostPage