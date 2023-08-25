
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchedulePage from './pages/SchedulePage';

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
