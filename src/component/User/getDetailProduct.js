import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/detailProduct/${id}`) // Gọi API với id
      .then((res) => {
        setProduct(res.data); // Cập nhật dữ liệu sản phẩm
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu sản phẩm:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Đang tải dữ liệu sản phẩm...</p>;
  }

  return (
    <div className="container m-4">
      <h2 className="text-center mb-4"> Tên sản phẩm: {product.ten}</h2>
      <div className="row">
        {/* <div className="col-md-4">
          <img
            src={product.hinhanh || "https://via.placeholder.com/150"}
            alt={product.ten}
            className="img-fluid"
          />
        </div> */}
        <div className="col-md">
          <h4>Giá: {product.gia} VNĐ</h4>
          <p>{product.mota}</p>
          <button className="btn btn-dark">Thêm vào giỏ hàng</button>
        </div>
        s
      </div>
    </div>
  );
};

export default DetailProduct;
