
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import { DashBoard } from "./pages/DashBoard.jsx";
import { SendMoney } from "./pages/SendMoney.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
