import './App.css';
import Citydata from './components/AdminForCity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import CabData from './components/AdminForCabs';
import AdminForBookings from './components/AdminForBookings';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>

          <Route path="/" element={<Form />} />
          <Route path="/AdminForCabs" element={<CabData />} />
          <Route path="/AdminForCity" element={<Citydata />} />
          <Route path="/AdminBookings" element = {<AdminForBookings/>}/>
          
        </Routes>
      </Router>
   </div>
  );
}
export default App;
