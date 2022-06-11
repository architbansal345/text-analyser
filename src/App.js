import React , { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  const togglemode = () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.background = "#574141";
      showAlert("Dark mode is Enabled!", "success");
    }
    else{
      setmode('light');
      document.body.style.background = "white";
      showAlert("Light mode is Enabled!", "success")
    }
  }

  const[mode,setmode] = useState('light');
  const[alert , setalert] = useState(null);
  const showAlert = (message,type) =>{
    setalert({
    msg:message,
    tp:type,
  })
  setTimeout(()=>{
    setalert(null);
  },1500
  )
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
