"use client"

import React from 'react'

import Post from '@/components/PostCards/Post/Post'
import { PostProps } from '@/types'
import styles from '@/styles/postCard.module.css'

const PostCard = ({posts}: PostProps) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px"}}>
       {posts.map((post, index)=>(
          <Post
            key={index}
            title={post.title}
            content={post.body}
            className={index === 0 ? styles.fullWidth : styles.halfWidth}
            postId={post.id}
            likes={post.likes}
            dislikes={post.dislikes}
            isDisliked={post.isDisliked}
            isLiked={post.isLiked}
          />
       )
       )
       }
    </div>
  )
}

export default PostCard