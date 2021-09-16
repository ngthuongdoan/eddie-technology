import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const ErrorLayout: FunctionComponent = (): JSX.Element => {
  return (
    <>
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
