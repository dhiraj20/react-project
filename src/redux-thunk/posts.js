import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./posts.slice.js";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const getContent = () => {
    let content = "";
    if (status === "loading") {
      content = <p>Loading...</p>;
    } else if (status === "succeeded") {
      content = posts.map((post) => <p key={`${post.id}-${post.title}`}>{post.id} - {post.title}</p>);
    } else if (status === "failed") {
      content = <p>{error}</p>;
    }
    return content;
  };
  return (
    <div>
      Redux thunk example
      <div>{getContent()}</div>
    </div>
  );
};

export default Posts;
