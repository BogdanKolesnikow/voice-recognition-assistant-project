// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Docs from './components/Docs'; // Импорт компонента Docs (если он существует)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Добавление необходимых импортов

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<App />} />
        {/* Страница документации */}
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
