import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login/Registration";
import Nav from "./Pages/Shared/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
