
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPatient from './components/ListPatient';
import AddPatient from './components/AddPatient';

function App() {
  return (
   <div>

    <Router>
    <HeaderComponent/>
    <div className="continer">

      <Routes>

      <Route exact path="/" element={<ListPatient/>}/>
      <Route  path="/patient" element={<ListPatient/>}/>
      <Route  path="/add-patient" element={<AddPatient/>}/>
      <Route  path="/edit-patient/:Patientid" element={<AddPatient/>}/>
        
        
      </Routes>
       </div>

    <FooterComponent/>
    </Router>

   </div>
  );
}

export default App;
