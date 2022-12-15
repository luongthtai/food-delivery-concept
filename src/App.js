import Header from './component/Header/Header';
import "./assits/style.scss"
import { Route, Routes } from 'react-router-dom';
import HomePage from './layout/HomePage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
