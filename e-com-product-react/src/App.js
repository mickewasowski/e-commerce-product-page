import Header from './components/header/headerContainer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}/>
      </Routes>
    </>
  );
}

export default App;
