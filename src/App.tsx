/** Main component for the app */
import React from 'react';
import Header from "./components/Header";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
// Components
import ZipCodeFilter from "./components/ZipCodeFilter";
import DistanceFilter from "./components/DistanceFilter";
import GenderFilter from "./components/GenderFilter";
import DoctorList from "./components/DoctorList";
// actions
import { zipCodeSearch } from "./actions/ZipCodeAction";

type AppProps = {
  onZipCodeSearch: (distance: number) => void
}

export class App extends React.Component<AppProps> {
  onZipCodeClick = (distance: number) => {
    console.log(`Zip Clicked => ${distance}`);
    this.props.onZipCodeSearch(distance);
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="App">
        <Header/>
        <div className="content-container">
          <div className="hero">
            <img src="../images/hospital.png" alt="Hospital"/>
          </div>
          <ZipCodeFilter
            onZipCodeSearch={(passed: number) => {
              this.onZipCodeClick(passed)
            }}
          />
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
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onZipCodeSearch: (distance: number | null) => dispatch(zipCodeSearch(distance))
  }
};

export default connect(undefined, mapDispatchToProps)(App);
