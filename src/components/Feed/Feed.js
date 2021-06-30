import "./Feed.css";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <CreatePost />
      <Post />
    </div>
  );
};

export default Feed;
