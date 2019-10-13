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

type AppState = {
  zipCode: number | null
}

type AppProps = {
  onZipCodeSearch: (distance: number) => void
}

const getInitialState: AppState = {
  zipCode: null
};

export class App extends React.Component<AppProps, AppState> {
  readonly state = getInitialState;
  onZipCodeClick = (distance: number) => {
    console.log(`Zip Clicked => ${distance}`);
    this.setState({
      zipCode: distance
    });
    this.props.onZipCodeSearch(distance);
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    console.log("APP STATE: ");
    console.log(this.state);
    console.log("APP PROPS: ");
    console.log(this.props);
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
              {this.state.zipCode === null
                ? <div>
                    <h3>Please enter a zip code in the field above</h3>
                  </div>
                : <DoctorList/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  console.log("Map State");
  console.log(state);
  return {
    zipCode: state.zipCode
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onZipCodeSearch: (distance: number | null) => dispatch(zipCodeSearch(distance))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
