"use client"

import Homepage from "@/pages/Homepage";
import styles from "./page.module.css";
import { Provider } from 'react-redux'
import { store } from "@/redux/store";
import PostPage from "@/pages/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <main className={styles.main}>
     <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post" element={<PostPage/>} />
        </Routes>
      </BrowserRouter>
     </Provider>
    </main>
  );
}
