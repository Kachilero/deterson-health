/**
 * Gender Filter
 */
import React from "react";

export class GenderFilter extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className='gender-filter'>
        <h2 className='heading'>Gender</h2>
        <div className='input-group'>
          <div className='input-group--item'>
            <label htmlFor="male">Male</label>
            <input type="radio" name="male" id="male"/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="female" id="female"/>
            <label htmlFor="default">No Preference</label>
            <input type="radio" name="default" id="default"/>
          </div>
        </div>
      </div>
    )
  }
}

export default GenderFilter;
