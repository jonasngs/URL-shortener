import { Fragment } from 'react';
import URLShortener from "./components/URLShortener";
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <URLShortener />
      </div>
    </Fragment>
  );
}

export default App;
