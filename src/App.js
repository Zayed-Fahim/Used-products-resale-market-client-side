import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
