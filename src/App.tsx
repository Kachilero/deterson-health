/** Main component for the app */
import React from 'react';
import Header from "./components/Header";
import ZipCodeFilter from "./components/ZipCodeFilter";
import DistanceFilter from "./components/DistanceFilter";
import GenderFilter from "./components/GenderFilter";
import DoctorList from "./components/DoctorList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <div className="content-container">
        <div className="hero">
          <img src="../images/hospital.png" alt="Hospital"/>
        </div>
        <ZipCodeFilter/>
        <div className='row'>
          <div className='left'>
            <DistanceFilter/>
            <GenderFilter/>
          </div>
          <div className='right'>
            <DoctorList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
