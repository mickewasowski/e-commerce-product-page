import ProductPage from './routes/productPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductPage />}/>
      </Routes>
    </>
  );
}

export default App;
