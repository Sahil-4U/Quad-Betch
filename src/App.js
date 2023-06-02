import { useState } from 'react';
import {Routes,Route,useNavigate} from 'react-router-dom';
import { Badge, Spinner } from 'react-bootstrap';
import './App.css';
import Details from './components/Details';
import Booking from './components/Booking';


function App() {
  const [movie,setMovie]=useState([]);
  const navigate=useNavigate();
  const handleSetMovie=(data)=>{
    setMovie([data]);
    navigate('/booking');
  }
  return (
    <>
    
    
    

    <Routes>
      <Route exact path='/' element={<Details handleSetMovie={handleSetMovie}/>}/>
      <Route exact path='/booking' element={<Booking movie={movie}/>}/>
      <Route path='*' element={
        <center>
          <h3>
          <Spinner animation="grow" variant="info" />
          <Badge bg="danger" className='shadow-rounded m-3'>404</Badge>
          <Spinner animation="grow" variant="warning" />
           <h4 >This route is not exist </h4>
          </h3>
        </center>
        
      } />
      
    </Routes>
    
    </>
  );
}

export default App;
