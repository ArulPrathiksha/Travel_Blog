
import Post from "../Blog/Post";
import "./Posts.css"
const Posts=()=> {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/1051072/pexels-photo-1051072.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post img="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post img="https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  );
}

export default Posts