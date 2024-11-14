import "./App.css";
import Header from "./component/Header.js";
import Footer from "./component/footer.js";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
