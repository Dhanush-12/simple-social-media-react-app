import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if(action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    } else if(action.type === 'ADD_POST') {
        newPostList = [action.payload ,...currentPostList]
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
        type: 'ADD_POST',
        payload: {
            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: reactions,
            tags: tags,
        }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
        type: 'DELETE_POST',
        payload: {
            postId,
        }
    })
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Chennai",
    body: "Hi Friends, Iam going to chennai for my vacations, Peace out",
    reactions: 4,
    userId: "user_1",
    tags: ["vacation", "Chennai", "Life", "Enjoying"],
  },
  {
    id: "2",
    title: "Test Post",
    body: "This is just a test post with id 2",
    reactions: 13,
    userId: "user_3",
    tags: ["test", "testing", "app"],
  },
];

export default PostListProvider;
