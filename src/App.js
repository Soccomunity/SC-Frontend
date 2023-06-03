
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home"
import Post from "./routes/post"


function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/post' element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
