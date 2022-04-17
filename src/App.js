import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Shared/Nav/Nav";
import Home from "./Pages/Home/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login/Registration";
import ResetPassword from "./Pages/Login/ResetPassword";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/checkout/:id"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
