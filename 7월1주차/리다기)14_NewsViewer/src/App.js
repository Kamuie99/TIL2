import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsPage></NewsPage>} />
      <Route path='/:category' element={<NewsPage></NewsPage>} />
    </Routes>
  );
};

export default App;