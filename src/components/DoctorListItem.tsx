/**
 * The individual doctor cards
 */
import React from "react";
import { IDoctorsInterface } from '../interfaces/IDoctorsInterface';

type DoctorListItemState = {}
type DoctorListItemProps = {
  key: number
  doctor: IDoctorsInterface
}

export class DoctorListItem extends React.Component<DoctorListItemProps, DoctorListItemState> {
  // readonly state = getInitialState(this.props);
  outputDistance = (distance: number | null) => {
    if (distance !== null) {
      let dNumber = Math.ceil(distance);
      return dNumber > 1 ? dNumber + ' Miles' : dNumber + ' Mile';
    }
    return 'No Distance Given'
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { doctor } = this.props;
    return (
      <div className="doctor-card">
        <div className='doctor-card--image'>
          <img src={((doctor.image !== null && doctor.image.length > 1) ? doctor.image : "../images/avatar.png")} alt="doctor"/>
        </div>
        <div className='doctor-card--body'>
          <div className='doctor-card--name'>
            <h2><a href={doctor.url}>{doctor.fullName}</a></h2>
            {doctor.specialties.sort().map((prop, key) => {
              return (<h3 key={key}>{prop}</h3>)
            })}
          </div>
        </div>
        <div className='doctor-card--info-container'>
          <div className='doctor-card--info'>
            {doctor.locations.map((prop,key) => {
              return (
                <div key={key}>
                  <h3 className='location'><a href={prop.url} target='_blank' rel="noopener noreferrer">{prop.name}</a></h3>
                  <p className='distance'>{ this.outputDistance(prop.distance) }</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default DoctorListItem;
