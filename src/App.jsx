import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </main>
  );
}

export default App;
