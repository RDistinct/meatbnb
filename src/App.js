
import{BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Collections from './Collections'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/Collections' element={<Collections/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
