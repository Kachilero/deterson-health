/**
 * The individual doctor cards
 */
import React from "react";

export class DoctorListItem extends React.Component {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="doctor-card">
        <div className='doctor-card--image'>
          <img src="../images/avatar.png" alt="doctor"/>
        </div>
        <div className='doctor-card--body'>
          <div className='doctor-card--name'>
            <h2>Susan M. Smith, MD</h2>
            <h3>Woman's Health Dermatology</h3>
          </div>
          <div className='doctor-card--info'>
            <h3 className='location'>Arbor Creek</h3>
            <p className='distance'>3 miles</p>
            <h3 className='location'>Olathe Health Family Medicine - Paola</h3>
            <p className='distance'>10 miles</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DoctorListItem;
