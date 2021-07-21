import "./Feed.css";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPost } from "../../features/post/postSlice";
import { useParams } from "react-router";

const Feed = ({ posts }) => {
  const { id } = useParams();
  const { timeline } = useSelector(selectPost);
  const [state, setstate] = useState(posts);
  useEffect(() => {
    if (posts) {
      setstate(posts);
    } else {
      setstate(timeline);
    }
  }, [posts, timeline]);

  return (
    <div className="feed">
      {!id && <CreatePost />}
      {state?.length > 0 ? (
        state?.map((item) => {
          return <Post key={item?._id} post={item} />;
        })
      ) : posts ? (
        <p className="noPostTxt">Have'nt Posted anything yet!</p>
      ) : (
        <p className="noPostTxt">Follow people to get some feed!</p>
      )}
    </div>
  );
};

export default Feed;
