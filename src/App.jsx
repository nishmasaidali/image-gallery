import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Image from "./pages/image";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:id" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;