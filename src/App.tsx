/** Main component for the app */
import React from 'react';
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <div className="content-container">
        <div className="hero">
          <img src="../images/hospital.png" alt="Hospital"/>
        </div>
      </div>
    </div>
  );
}

export default App;
