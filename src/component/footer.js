import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Về Chúng Tôi</h5>
            <p>
              Đây là phần giới thiệu ngắn gọn về công ty hoặc tổ chức của bạn.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Liên Hệ</h5>
            <p>Địa chỉ: 123 Đường ABC, TP. XYZ</p>
            <p>Email: contact@example.com</p>
            <p>Điện thoại: (0123) 456-789</p>
          </div>
          <div className="col-md-4">
            <h5>Theo Dõi Chúng Tôi</h5>
            <p>
              <a href="#" className="text-white">
                Facebook
              </a>{" "}
              |{" "}
              <a href="#" className="text-white">
                Twitter
              </a>{" "}
              |{" "}
              <a href="#" className="text-white">
                Instagram
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            &copy; {new Date().getFullYear()} Công Ty ABC. Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
