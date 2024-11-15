import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    userName: "",
    passWord: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gửi yêu cầu đăng nhập đến backend
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/login`,
      {
        email: state.userName,
        password: state.passWord,
      },
      { withCredentials: true } // Đảm bảo cookie được gửi kèm theo yêu cầu
    );

    if (response.status === 200) {
      // Lưu thông tin người dùng trong localStorage nếu cần
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response.data.user);
      console.log(response.data.message);
      console.log(localStorage);
      // Chuyển hướng đến trang chính
      navigate("/listProducts");
    }
  };

  return (
    <div className="container d-flex justify-content-center m-4">
      <div className="card p-4 w-50">
        <h2 className="mb-4">Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Tên Đăng Nhập
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="userName"
              placeholder="Nhập tên đăng nhập"
              value={state.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mật Khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="passWord"
              placeholder="Nhập mật khẩu"
              value={state.passWord}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
