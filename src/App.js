import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowList from './components/ShowList';
import ShowSummary from './pages/ShowSummary';
import BookTickets from './pages/BookTickets';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/shows/:id" element={<ShowSummary />} />
          <Route path="/shows/:id/book-tickets" element={<BookTickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
