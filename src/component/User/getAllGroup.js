import React, { useEffect, useState } from "react";
import axios from "axios";

const ListGroup = () => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/group`)
      .then((response) => {
        setGroup(response.data); // Lưu dữ liệu nhóm sản phẩm vào state
      })
      .catch((error) => {
        console.log(error); // Hiển thị lỗi nếu có
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh Sách Nhóm Sản Phẩm</h2>
      <div className="row">
        {group.map((item, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.ten}</h5>
                <a href="#" className="btn btn-primary">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
