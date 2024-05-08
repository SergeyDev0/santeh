import React from "react";
import { Link } from "react-router-dom";
import "./tabBar.scss";

const TabBar = () => {
  return (
    <nav className="tab_bar">
      <div className="tab_bar__wrapper">
        <ul className="tab_bar__list">
          <li className="tab_bar__list-item">
            <Link to="/" className="tab_bar__list-item--link">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.717 17.2913C15.921 17.2913 16.901 18.2643 16.901 19.4603V22.5363C16.901 22.7933 17.107 22.9993 17.371 23.0053H19.277C20.779 23.0053 22 21.7993 22 20.3173V11.5933C21.993 11.0833 21.75 10.6033 21.333 10.2843L14.74 5.02625C13.855 4.32525 12.617 4.32525 11.729 5.02825L5.181 10.2823C4.748 10.6113 4.505 11.0913 4.5 11.6103V20.3173C4.5 21.7993 5.721 23.0053 7.223 23.0053H9.147C9.418 23.0053 9.638 22.7903 9.638 22.5263C9.638 22.4683 9.645 22.4103 9.657 22.3553V19.4603C9.657 18.2713 10.631 17.2993 11.826 17.2913H14.717ZM19.277 24.5053H17.353C16.251 24.4793 15.401 23.6143 15.401 22.5363V19.4603C15.401 19.0913 15.094 18.7913 14.717 18.7913H11.831C11.462 18.7933 11.157 19.0943 11.157 19.4603V22.5263C11.157 22.6013 11.147 22.6733 11.126 22.7413C11.018 23.7313 10.172 24.5053 9.147 24.5053H7.223C4.894 24.5053 3 22.6263 3 20.3173V11.6033C3.01 10.6093 3.468 9.69925 4.259 9.10025L10.794 3.85525C12.233 2.71525 14.238 2.71525 15.674 3.85325L22.256 9.10325C23.029 9.69225 23.487 10.6003 23.5 11.5823V20.3173C23.5 22.6263 21.606 24.5053 19.277 24.5053Z" fill="#646464"/>
              </svg>
            </Link>
          </li>
          <li className="tab_bar__list-item">
            <Link to="/catalog" className="tab_bar__list-item--link">
            <svg width="27" height="27" viewBox="0 0 501 301" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17H150.333M17 150.333H117M17 283.667H217M399.43 198.75C418.533 179.477 430.333 152.95 430.333 123.667C430.333 64.7567 382.577 17 323.667 17C264.757 17 217 64.7567 217 123.667C217 182.577 264.757 230.333 323.667 230.333C353.293 230.333 380.1 218.253 399.43 198.75ZM399.43 198.75L483.667 283.667" stroke="#646464" strokeWidth="25.3333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Link>
          </li>
          <li className="tab_bar__list-item">
            <Link to="/contacts" className="tab_bar__list-item--link">
              <svg width="20" height="27" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.3182C1 14.4232 9.18542 27.5088 10.8182 27.5C12.4254 27.5088 20.6364 14.8591 20.6364 10.8091C20.6364 5.38749 16.2408 0.5 10.8182 0.5C5.3956 0.5 1 4.89658 1 10.3182Z" stroke="#646464" strokeWidth="1.5"/>
                <path d="M7.87271 10.8091C7.87271 12.436 9.19129 13.7546 10.8182 13.7546C12.445 13.7546 13.7636 12.436 13.7636 10.8091C13.7636 9.18223 12.445 7.86365 10.8182 7.86365C9.19129 7.86365 7.87271 9.18223 7.87271 10.8091Z" stroke="#646464" strokeWidth="1.3"/>
              </svg>
            </Link>
          </li>
          <li className="tab_bar__list-item">
            <Link to="/about" className="tab_bar__list-item--link">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#646464" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default TabBar;
