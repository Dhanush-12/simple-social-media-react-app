import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setIsLoading(false);
      });
    
    return (() => {
      controller.abort();
    })
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner/>
      ) : postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      )}
    </>
  );
};

export default PostList;
