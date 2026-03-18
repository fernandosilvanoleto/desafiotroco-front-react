import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangeCalculator from "./pages/Sales/ChangeCalculator";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<ChangeCalculator />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
