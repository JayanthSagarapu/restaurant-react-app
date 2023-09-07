import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
