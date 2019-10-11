/**
 * Sorts list by Zip code
 */
import React from "react";
// import { connect } from 'react-redux';

export class ZipCodeFilter extends React.Component {

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
            />
          </div>
          <button type='submit' className='button'>Search</button>
        </div>
      </div>
    )
  }
}

export default ZipCodeFilter;
