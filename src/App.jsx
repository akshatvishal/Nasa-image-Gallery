import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { DataContext, queryContext } from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [Data, setData] = useState(0);
  const [query, setQuery] = useState("");
  return (
    <queryContext.Provider value={{query,setQuery}}>
      <DataContext.Provider value={{ Data, setData }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </queryContext.Provider>
  );
}

export default App;
