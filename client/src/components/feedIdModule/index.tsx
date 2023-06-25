// import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../assets";
import "./styles.css";

const FeedIdModule = () => {
  return (
    <div>
      <div className="feed__module--container">
        <div
          className="feed__module--bg-image"
          style={{ backgroundImage: `url(${profile})` }}></div>
        <div className="feed__module--break-words">
          <Link to="" className="feed__module--linkID">
            <div>
              <img src={profile} alt="Photo of John Doe" className="feed__module--member-photo" />
              <div className="feed__module--name">John Doe</div>
            </div>
          </Link>
          <div className="feed__module--short-description">
            Power Engineer | Fullstack Developer
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default FeedIdModule;