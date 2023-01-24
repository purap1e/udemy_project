import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Main from "./components/pages/mainPage";
import Footer from "./components/footer/footer";
import LoginPage from "./components/pages/loginPage";
import SignUp from "./signup/signUp";

function App() {
  return (
      <div>
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>

            <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
