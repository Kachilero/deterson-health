/**
 * Gender Filter
 */
import React from "react";

export class GenderFilter extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className='gender-filter'>
        <h3 className='heading'>Gender</h3>
        <div className='input-group'>
          <div className='input-group--item'>
            <input type="radio" name="male" id="male"/>
            <label htmlFor="male">Male</label>
          </div>
          <div className='input-group--item'>
            <input type="radio" name="female" id="female"/>
            <label htmlFor="female">Female</label>
          </div>
          <div className='input-group--item'>
            <input type="radio" name="default" id="default"/>
            <label htmlFor="default">No Preference</label>
          </div>
        </div>
      </div>
    )
  }
}

export default GenderFilter;
