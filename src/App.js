
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home"
import Post from "./routes/post"
import Login from "./routes/login"
import Join from "./routes/join"

function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/post' element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
