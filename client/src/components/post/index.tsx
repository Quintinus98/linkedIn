import React from "react";
import { profile } from "../../assets";
import "./styles.css";

import { postType } from "../../features/posts/PostsList";

export const randomNum = (val?: number) => {
  const val2: number = 10000;
  if (val) {
    const random = Math.floor(Math.random() * val);
    return random;
  } else {
    const random = Math.floor(Math.random() * val2);
    return random;
  }
};

const Post = (post: postType) => {
  const [btnClick, setbtnClick] = React.useState(false);
  const clickedBtn = () => setbtnClick(true);

  const Img_video = () => {
    if (post.image) {
      return <img src={post.image} alt="Egbin Power PLC" />;
    } else if (post.video) {
      return <video src={post.video} controls></video>;
    } else return <img src="" />;
  };

  return (
    <>
      <div className="post">
        <div className="post__header post--pad">
          <div className="post__logo">
            <img src={profile} alt="" />
          </div>
          <div className="post__profile">
            <h4>Egbin Power PLC</h4>
            <div>{randomNum()} followers</div>
            <div className="post__profile--time">
              5h<span style={{ color: "#666666" }}>•</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#666666"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg>
            </div>
          </div>
          <button className="post__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false">
              <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
          </button>
        </div>
        <div className="post__text post--pad">
          <div className={!btnClick ? "post__trunc" : "post__full-text"}>{post.text_content}</div>
          <div className={!btnClick ? "btn-container" : "post__text--no-button"}>
            <button onClick={clickedBtn}>...see more</button>
          </div>
        </div>
        <div className="post__content">
          <Img_video />
        </div>
        <div className="post--pad post__comment-follow">
          <div>John Doe</div>
          <div>2 comments</div>
        </div>
        <div className="post--pad">
          <hr />
        </div>

        <ul className="post__reactions post--pad">
          <li>
            <button>
              <div className="like ">
                <i className="fa-regular fa-thumbs-up fa-flip-horizontal post__icon"></i>
                <span>Like</span>
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className="comment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                </svg>
                <span>Comment</span>
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className="repost">
                <i className="fa-solid fa-retweet post__icon"></i>
                <span>Repost</span>
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className="send">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                </svg>
                <span>Send</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Post;
