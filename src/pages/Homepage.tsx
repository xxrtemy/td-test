"use client"

import React from 'react'
import styles from '@/styles/homepage.module.css';
import Input from '@/components/ui/Input';
import PostCard from '@/components/PostCards/PostCards';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addPosts } from '@/redux/slices/postsSlice';

const Homepage = () => {
  const [value, setValue]= React.useState(''),
    dispatch = useAppDispatch(),
    posts = useAppSelector((state) => state.posts.postsItems)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  
  React.useEffect(() => {
    const searchValue = value ? `?title=${value}` : '';
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts${searchValue}`)
        .then((response) => response.json())
        .then((json) => dispatch(addPosts(json)))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [value]);
  
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Блог</h1>
        <p className={styles.title}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
        <Input 
          type='search'
          placeholder='Поиск по названию статьи'
          onChange={handleSearchChange}
          value={value}  
        />
        <PostCard
          posts={posts}
        />
    </div>
  )
}

export default Homepage