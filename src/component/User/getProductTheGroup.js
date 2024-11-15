import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { idGroup } = useParams(); // Lấy idGroup từ URL
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/product/${idGroup}`) // Dùng idGroup trong API
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu sản phẩm:", error);
      });
  }, [idGroup]); // Thêm idGroup vào dependencies để gọi lại API khi idGroup thay đổi

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh Sách Sản Phẩm</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                {/* <img
                  src={product.hinhanh || "https://via.placeholder.com"}
                  className="card-img-top"
                  alt={product.ten}
                /> */}
                <div className="card-body">
                  <h5 className="card-title">{product.ten}</h5>
                  <p className="card-text">Giá: {product.gia} VNĐ</p>
                  <p className="card-text">Mô tả: {product.mota}</p>
                  <Link
                    to={`/detailProduct/${product.id}`}
                    className="btn btn-dark"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Không có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
