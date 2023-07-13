import { Link } from "react-router-dom";
import "./Post.css"

const Post=({img})=> {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Travel
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          A Small Hike with The Himalayan Shire
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Prasad Np has been dedicated to writing about India from the perspective of both his family – in comfort and style – and as a sole voyager 
      in a more backpacking, fly-by-the-seat-of-his-pants approach. Brimming with India travel tips and dos and don’ts, you can search the blog by 
      specific destination (or state), which is highly useful if you are wishing to go in-depth during your India travels. You might wish to avoid 
      altitude sickness at Ladakh in the Himalayas, or learn about how a specific festival in a specific Indian city ticks. This is the blog for you.
      </p>
    </div>
  );
}


export default Post