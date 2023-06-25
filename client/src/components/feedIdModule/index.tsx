// import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../assets";
import "./styles.css";
import { randomNum } from "../post";

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
        <div>
          <div>
            Who's viewed your profile <span>{randomNum(100)}</span>
          </div>
          <div>
            Impressions of your post <span>{randomNum(999)}</span>
          </div>
        </div>
        <hr />
        <div>
        Access exclusive tools & insights
        Get Hired Faster, Try Premium Free
        </div>
        <hr />
        <div>
        My items
        </div>
      </div>
    </div>
  );
};

export default FeedIdModule;