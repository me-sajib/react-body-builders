import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Nav from "./Pages/Shared/Nav/Nav";

function App() {
  return (
    <div className="bg-dark">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
