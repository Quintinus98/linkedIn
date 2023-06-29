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
        </div>
        <div className="feed__module--short-description">Power Engineer | Fullstack Developer</div>
        <hr />
        <div className="feed__module--view__impressions">
          Who's viewed your profile{" "}
          <strong>
            <span>{randomNum(100)}</span>
          </strong>
        </div>
        <div className="feed__module--view__impressions">
          Impressions of your post{" "}
          <strong>
            <span>{randomNum(1000)}</span>
          </strong>
        </div>
        <hr className="hr__btm" />
        <div className="feed__module--insights">
          <span>Access exclusive tools & insights</span>
          <div className="feed__module--premium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false">
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"></path>
            </svg>
            <span>Try Premium for free</span>
          </div>
        </div>
        <hr className="hr__null" />
        <div className="feed__module--items">
          <i className="fa-solid fa-bookmark"></i>
          <span>My items</span>
        </div>
      </div>
    </div>
  );
};

export default FeedIdModule;
