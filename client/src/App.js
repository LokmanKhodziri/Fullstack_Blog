import './App.css';
import Layout from './component/Layout';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './component/IndexPage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import CreatePost from './component/CreatePost'
import { UserContextProvider } from './component/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>

  );
}

export default App;