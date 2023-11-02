import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
const [Mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);

const showAlert= (message, type)=>
{
  setAlert(
  {
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}


const toggle=()=>
{
  if (Mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor= '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled","success")

  }
}
  return (
    <>
    <Router>
      
    <Navbar title ="TextUtils" mode={Mode} toggleMode ={toggle}/>
    <Alert alert={alert}/>

    <Routes>
        <Route exact path="/" element={<TextForm heading="Write your text here to analyze" mode={Mode} showAlert={showAlert} />}/>

        <Route path="/about" element={<About/>}/>
    </Routes>
    </Router>
    </>
  );
}


export default App;
