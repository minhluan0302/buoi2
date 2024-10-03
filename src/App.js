import "./App.css";
import { Hello, HelloPersion } from "./component/Hello.js";
import { Menu, Item, Header } from "./component/Header.js";
import { Hola, hiAll, hiYou } from "./component/hola.js";
import Cart from "./component/Cart.js";
import Login from "./component/Login.js";
function App() {
  return (
    <>
      <div className="App">
        <Hello />
        <Header />
        <Hola />
        <Cart />
        <Login />
      </div>
    </>
  );
}

export default App;
