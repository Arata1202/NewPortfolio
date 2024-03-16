import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './components/TopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/toppage" element={<TopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
