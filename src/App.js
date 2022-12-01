import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LeftSidebar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex custom:flex-row flex-col">
        <LeftSidebar />

        <div className="w-full custom:w-[60%]">
          <Home />
        </div>

        <RightSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
