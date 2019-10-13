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
  distance: number
  gender: string
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
    distance: 30,
    gender: "default",
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
    let filteredByGender: any = this.props.onGenderFilter(gender, results);
    filteredByGender.results = filteredByGender.results.filter((result: any) => {
      if (this.state.distance === 30) { return result; }
      const resultDistance = Math.ceil(result.locations[0].distance);
      return (resultDistance < this.state.distance) ? result : '';
    });
    this.setState({
      gender: filteredByGender.gender,
      zipCodeReducer: {
        results: filteredByGender.results
      }
    })
  };

  onDistanceSelection = (distance: number) => {
    const results = this.props.zipCodeReducer.results;
    let filteredByDistance: any = this.props.onDistanceFilter(distance, results);
    filteredByDistance.results = filteredByDistance.results.filter((result: any) => {
      if (this.state.gender === 'default') { return result; }
      return (result.gender === this.state.gender) ? result : '';
    });
    this.setState({
      distance: filteredByDistance.distance,
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
