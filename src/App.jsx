import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { DataContext, queryContext } from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./Components/Description";

function App() {
  const [Data, setData] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <queryContext.Provider value={{query,setQuery}}>
      <DataContext.Provider value={{ Data, setData }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home/:nasa_id" element={<Description />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </queryContext.Provider>
  );
}

export default App;
