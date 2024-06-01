import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Principal from './pages/Principal';
import Agregar from './pages/Agregar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Agregar" element={<Agregar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
