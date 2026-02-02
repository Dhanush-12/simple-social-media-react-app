import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList }  from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          itemType="button"
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ cursor: "pointer" }}
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        <div className="badge-container">
          {post.tags.map((tag) => (
            <>
              <span key={tag} className="badge text-bg-primary">#{tag}</span>
            </>
          ))}
        </div>
        <div className="reactions">
          <div className="alert alert-success" role="alert">
            This post has been reacted by {post.reactions.likes + post.reactions.dislikes} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
