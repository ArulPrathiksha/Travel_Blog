import "./Header.css"

const Header=() =>{
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg"
        alt=""
      />
      
    </div>
  );
}

export default Header