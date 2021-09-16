import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const ErrorLayout: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <video className="background-video" autoPlay loop muted>
        <source type="video/webm" src="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/videoplayback_720.webm?alt=media&token=7167e39f-5a66-48c4-b55f-83491e45a729" />
      </video>
      <div className="notfound">
        <div className="notfound__container">
          <div className="notfound__content">
            <h1>404</h1>
          </div>
          <h2>Oops! Lỗi rồi...</h2>
          <p>Trang bạn tìm kiếm không tồn tại, có lỗi gì chăng?</p>
          <Link to="/">Trở về trang chủ</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorLayout;
