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
import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0"> Web</h1>
          <nav>
            <a href="/" className="text-white mx-3">
              Trang Chủ
            </a>
            <a href="/about" className="text-white mx-3">
              Giới Thiệu
            </a>
            <a href="/contact" className="text-white mx-3">
              Liên Hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
