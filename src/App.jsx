import Header from "./Component/Header";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <Sidebar/>
      </BrowserRouter>
    </>
  );
}

export default App;
