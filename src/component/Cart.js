// import React, { useState } from "react";

// function Cart() {
//   const [car, setCar] = useState({
//     name: "Toyota",
//     color: "Red",
//     year: "2010",
//   });

//   const updateYear = (event) => {
//     setCar((prev) => ({
//       ...prev,
//       year: event.target.value,
//     }));
//   };

//   return (
//     <>
//       <h2>Car Information</h2>
//       <p>
//         <strong>Name:</strong> {car.name}
//       </p>
//       <p>
//         <strong>Color:</strong> {car.color}
//       </p>
//       <p>
//         <strong>Year:</strong> {car.year}
//       </p>

//       <input
//         type="number"
//         value={car.year}
//         onChange={updateYear}
//         placeholder="Enter new year"
//       />
//     </>
//   );
// }

// export default Cart;
import React, { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    name: "Car",
    color: "black",
    year: "2014",
  });
  const updateYear = (event) => {
    setCar((prev) => ({
      ...prev,
      year: event.target.value,
    }));
  };
  return (
    <>
      <h1>Thông tin chi tiết</h1>
      <p>
        <h2>Tên: </h2> {car.name}
      </p>
      <p>
        <h2>Màu: </h2>
        {car.color}
      </p>
      <p>
        <h2>Năm: </h2>
        {car.year}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={updateYear}
        placeholder="Nhập năm"
      />
    </>
  );
}

export default Car;
