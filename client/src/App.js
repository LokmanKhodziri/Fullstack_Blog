import './App.css';
import Layout from './component/Layout';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './component/IndexPage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;