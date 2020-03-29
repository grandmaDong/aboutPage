import React from "react";

export const Message = () => {
  return (
    <div className="message-page">
      <div className="leave-block">
        <div className="message-title">留言</div>
        <div className="message-owner">
          <input type="text" placeholder="昵称"></input>
        </div>
        <div className="message-content">
          <textarea placeholder="留言内容" className="msg-text"></textarea>
        </div>
        <button className="book-btn">留言</button>
      </div>
      <div className="message-list">
        <div className="title">最新留言</div>
        <div className="list-item">
          <div className="message-leave-time">
            <span className="name">@静初的二大爷</span>
            <span className="createAt">2019/09/05 14:01:04</span>
          </div>
          <div className="message">页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦</div>
        </div>
        <div className="list-item">
          <div className="message-leave-time">
            <span className="name">@静初的二大爷</span>
            <span className="createAt">2019/09/05 14:01:04</span>
          </div>
          <div className="message">页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦页面很清新呦</div>
        </div>
      </div>
    </div>
  )
}