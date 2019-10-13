/**
 * Handles and displays the list of doctors
 */
import React from "react";
import DoctorListItem from "./DoctorListItem";

type DoctorListProps = {
  results: {}[] | null
}

export class DoctorList extends React.Component<DoctorListProps> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { results } = this.props;
    console.log("Doctor List Props");
    console.log(this.props);
    console.log("Doctor List State");
    console.log(this.state);
    console.log("Doctor List");
    console.log(results);
    return (
      <div className='result-list'>
        <h2>Total Results: ###</h2>
        <DoctorListItem/>
      </div>
    )
  }
}

export default DoctorList;
