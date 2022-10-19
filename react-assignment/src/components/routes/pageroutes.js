import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Users from "../users/Users";
import Todos from "../todos/Todos";
import Albums from "../albums/Albums";
import Posts from "../posts/Posts";
import Photos from "../photos/Photos";
import Comments from "../comments/Comments";
import { useState } from "react";

const PageRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users/:userId/todos" element={<Todos />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/users/:userId/albums" element={<Albums />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/users/:userId/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
          <Route
            path="/users/:userId/albums/:albumId/photos"
            element={<Photos />}
          />

          <Route path="/comments" element={<Comments />} />
          <Route
            path="/users/:userId/posts/:postId/comments"
            element={<Comments />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default PageRoutes;
