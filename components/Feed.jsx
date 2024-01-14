"use client";
import { useState, useEffect } from "react";
import React from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const handleTagClick = (tag) => {
    setSearchText(tag);
    const filteredPosts = posts.filter((post) => {
      return post.tag.includes(tag);
    });
    setSearchedPosts(filteredPosts);
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // console.log(posts);
    const filteredPosts = posts.filter((post) => {
      return (
        post.prompt.includes(e.target.value) ||
        post.tag.includes(e.target.value)
      );
    });
    // console.log(filteredPosts);
    setSearchedPosts(filteredPosts);
  };
  useEffect(() => {
    const fetchposts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      // console.log(data);
      console.log(posts);
    };
    fetchposts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={searchedPosts.length === 0 ? posts : searchedPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
