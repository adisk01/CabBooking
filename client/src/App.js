import './App.css';
import Citydata from './components/AdminForCity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import Cabdata from './components/AdminForCabs';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>

          <Route path="/" element={<Form />} />
          <Route path="/AdminForCabs" element={<Cabdata />} />
          <Route path="/ADminForCity" element={<Citydata />} />
       
        </Routes>
      </Router>
   </div>
  );
}
export default App;
