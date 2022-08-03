import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

    
  return (
    <div className="App">
      <Router>
           <Navbar/>
           <Routes>
              <Route path="/" element={<News key="general" category="general"/>}></Route>
              <Route path="/science" element={<News key="science" category="science"/>}></Route>
              <Route path="/technology" element={<News key="technology" category="technology"/>}></Route>
              <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
              <Route path="/health" element={<News key="health" category="health"/>}></Route>
              <Route path="/business" element={<News key="business" category="business"/>}></Route>
              <Route path="/sports" element={<News key="sports" category="sports"/>}></Route>

              <Route path="/australia" element={<News key="australia" country="au"/>}></Route>
              <Route path="/india" element={<News key="india" country="in"/>}></Route>
              <Route path="/newzealand" element={<News key="newzealand" country="nz"/>}></Route>

           </Routes>
      </Router>
    </div>
  );
      }

export default App;
