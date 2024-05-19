import './App.css';
import Post from './component/Post';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
    </Routes>
  );
}

export default App;