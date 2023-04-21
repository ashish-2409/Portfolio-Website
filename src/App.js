import './App.css';
import Home from './screens/home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
