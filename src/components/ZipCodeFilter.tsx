/**
 * Sorts list by Zip code
 */
import React from "react";
import { connect } from 'react-redux';
// import { zipCodeSearch } from "../actions/ZipCodeAction";
// import {Dispatch} from "redux";

interface ZipCodeFilterState {
  zipCode: string
}
interface ZipCodeFilterProps {
  onZipCodeSearch: any
}

const initZipCodeState: ZipCodeFilterState = {
  zipCode: ''
};

export class ZipCodeFilter extends React.Component<ZipCodeFilterProps, ZipCodeFilterState> {
  readonly state = initZipCodeState;

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let zCode = e.target.value;
    let isValidZip = /^[0-9]*$/gm.test(zCode);
    // Check to make sure we have only numbers and there are less than 5
    // before updating the input value
    if (isValidZip && ( this.state.zipCode !== null && this.state.zipCode.length <= 4)) {
      this.setState({
        zipCode: e.target.value
      })
    }
  };

  onButtonClick = () => {
    const zCode = this.state.zipCode;
    if (zCode === null) {
      alert("Zip Code is NULL")
    } else if ( zCode.length !== 5 ) {
      alert("Zip Code must be 5 numbers long")
      return;
    }
    const zNumber = Number(zCode);
    this.props.onZipCodeSearch(zNumber);
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="zip-container">
        <div className="input-group">
          <div className="input-group--item">
            <label>Zip Code</label>
            <input
              type="text"
              name='zip'
              className="zip-input"
              value={this.state.zipCode}
              onChange={e => this.onTextChange(e)}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.onButtonClick();
                }
              }}
            />
          </div>
          <button
            type='submit'
            className='button'
            onClick={this.onButtonClick}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  zipCode: state.zipCode,
  ...state
});

export default connect(mapStateToProps, undefined)(ZipCodeFilter);
