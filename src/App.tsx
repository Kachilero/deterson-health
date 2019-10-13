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
import { distanceFilter, genderFilter } from "./actions/FilterActions";

type AppState = {
  zipCode: number | null
  zipCodeReducer: {
    results: {}[] | null
  }
}

type AppProps = {
  onZipCodeSearch: (distance: number) => void
  onDistanceFilter: (distance: number, results: any) => {}
  onGenderFilter: (gender: "Male" | "Female" | "default", results: any) => {}
  zipCodeReducer: {
    results: {}[] | null
  }
}

const getInitialState = (props: AppProps): AppState => {
  return {
    zipCode: null,
    zipCodeReducer: {
      results: props.zipCodeReducer.results
    }
  }
};

export class App extends React.Component<AppProps, AppState> {
  readonly state = getInitialState(this.props);

  onZipCodeClick = (distance: number) => {
    this.props.onZipCodeSearch(distance);
    this.setState({
      zipCode: distance,
      zipCodeReducer: {
        results: this.props.zipCodeReducer.results
      }
    });
  };

  onGenderSelection = (gender: "Male" | "Female" | "default") => {
    const results = this.props.zipCodeReducer.results;
    const filteredByGender: any = this.props.onGenderFilter(gender, results);
    this.setState({
      zipCodeReducer: {
        results: filteredByGender.results
      }
    })
  };

  onDistanceSelection = (distance: number) => {
    console.log(`Distance filter: ${distance}`);
    const results = this.props.zipCodeReducer.results;
    const filteredByDistance: any = this.props.onDistanceFilter(distance, results);
    console.log(filteredByDistance);
    this.setState({
      zipCodeReducer: {
        results: filteredByDistance.results
      }
    })
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    // console.log("APP STATE: ");
    // console.log(this.state);
    // console.log("APP PROPS: ");
    // console.log(this.props);
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
              <DistanceFilter
                onDistanceSelection = {(distance) => {
                  this.onDistanceSelection(distance);
                }}
              />
              <GenderFilter
                onGenderSelection={(gender) => {
                  this.onGenderSelection(gender);
                }}
              />
            </div>
            <div className='right'>
              {this.state.zipCode === null
                ? <div>
                    <h3>Please enter a zip code in the field above</h3>
                  </div>
                : <DoctorList
                  //@ts-ignore
                    results={this.state.zipCodeReducer.results}
                  />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  // console.log("Map State in APP");
  // console.log(state);
  return {
    zipCodeReducer: {
      results: state.zipCodeReducer.results
    },
    ...state
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onZipCodeSearch: (distance: number | null) => dispatch(zipCodeSearch(distance)),
    onDistanceFilter: (distance: number, results: any) => dispatch(distanceFilter(distance, results)),
    onGenderFilter: (gender: "Male" | "Female" | "default", results: any) => dispatch(genderFilter(gender, results))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
