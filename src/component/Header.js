// function Item({ props }) {
//   return (
//     <li>
//       <a href={props.link}>{props.content}</a>
//     </li>
//   );
// }
// function Menu({ list }) {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <Item props={item} key={index} />
//       ))}
//     </ul>
//   );
// }
// function Header() {
//   const list = [
//     {
//       link: "/about",
//       content: "aubout me",
//     },
//     {
//       link: "/cart",
//       content: "gio hansg",
//     },
//   ];
//   return <Menu list={list} />;
// }
// export { Item, Menu, Header };
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="text-black py-3" style={{ backgroundColor: "#FFCC00" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">
            <Link
              to="/listProducts"
              className="text-black text-decoration-none"
            >
              WEB
            </Link>

            <Link to="/group" className="mx-3 text-black text-decoration-none">
              MENU
            </Link>
            <span class="bi bi-list"></span>
          </h1>
          <nav>
            <a href="/" className="mx-3 text-black text-decoration-none">
              Trang Chủ
            </a>

            <a href="/contact" className="mx-3 text-black text-decoration-none">
              Liên Hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
