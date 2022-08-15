import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import URLShortener from "./components/URLShortener";
import HandleRedirect from './components/HandleRedirect';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/:shortId" element={<HandleRedirect />} />
          <Route exact path="/" element={<URLShortener />} />
        </Routes>
      </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
