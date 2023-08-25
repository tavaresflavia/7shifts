
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchedulePage from './pages/SchedulePage';
import ShiftsModal from './components/ShiftsModal/ShiftsModal';

function App() {
  return (
    <>
      
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element = {<HomePage/>}/> */}
        <Route path="/" element = {<SchedulePage/>}/>
      
        {/* <Route path="*" element = {<NotFound/>} /> */}
        </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
