import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './Portfolio/TopPage';
import TravelPage from './Portfolio/TravelPage';
import SearchPage from './Portfolio/SearchPage';
import "./CSS/TopPage.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/travelpage" element={<TravelPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;