/**
 * Handles and displays the list of doctors
 */
import React from "react";
import DoctorListItem from "./DoctorListItem";
import { IDoctorsInterface } from '../interfaces/IDoctorsInterface';

type DoctorListProps = {
  results: IDoctorsInterface[]
}

export class DoctorList extends React.Component<DoctorListProps> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { results } = this.props;
    return (
      <div className='result-list'>
        <h2>Total Results: {results.length}</h2>
        {results.map((result, key) => {
          return <DoctorListItem
            key={key}
            doctor={
              {
                fullName: result.fullName,
                lastName: result.lastName,
                specialties: result.specialties,
                languages: result.languages,
                url: result.url,
                image: result.image,
                gender: result.gender,
                bio: result.bio,
                locations: result.locations
              }
            } />
        })}
      </div>
    )
  }
}

export default DoctorList;
