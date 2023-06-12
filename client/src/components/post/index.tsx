import React from "react";
import { profile, Egbin } from "../../assets";
import "./styles.css"

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post__header post--pad">
          <div className="post__logo">
            <img src={profile} alt="" width={48} height={48} />
          </div>
          <div className="post__profile">
            <h4>Egbin Power PLC</h4>
            <div>19850 followers</div>
            <div>
              5h •{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg>
            </div>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
        <div className="post__text post--pad">
          "We are proud to be part of this great nation. Happy Democracy Day from all of us at Egbin
          Power Plc
        </div>
        <div className="post__content">
          <img src={Egbin} alt="Egbin Power PLC" width={500} />
        </div>
        <div className="post__comment-follow">
          <div>John Doe</div>
          <div>2 comments</div>
        </div>
        <div className="post__reactions">
          <div className="like"></div>
          <div className="comment"></div>
          <div className="repost"></div>
          <div className="send"></div>
        </div>
      </div>
    </>
  );
};

export default Post;