/**
 * Handles and displays the list of doctors
 */
import React from "react";
import DoctorListItem from "./DoctorListItem";

export class DoctorList extends React.Component {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className='result-list'>
        <h2>Total Results: ###</h2>
        <DoctorListItem/>
      </div>
    )
  }
}

export default DoctorList;
