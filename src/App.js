import React from 'react'
import PageIndex from './components/Layout/PageIndex';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <PageIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
