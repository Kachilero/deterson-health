/**
 * Reducer for the Zip Code search
 */
import {ZipCodeActionKeys, ZipCodeActionTypes} from "../actions/ZipCodeAction";
// import { IDoctorsResults } from '../interfaces/IDoctorsInterface'
import Doctors from '../api/doctors.json'

/*const ZipCodeSearchInitState: IDoctorsResults = {
  "results": [{
    "fullName": '',
    "lastName": '',
    "specialties": [''],
    "languages": [''],
    "url": '',
    "image": '',
    "gender": "Male",
    "bio": '',
    "locations": [{
      "name": '',
      "url": '',
      "streetAddress": null,
      "cityStateZip": null,
      "lat": 0,
      "lng": 0,
      "distance": null,
      "phone": null,
      "image": null,
      "availability": null
    }]
}]};*/
export default function (
  state: any,
  // state = ZipCodeSearchInitState,
  action: ZipCodeActionTypes)
{
  console.log('Zip Reducer');
  console.log(typeof Doctors);
  console.log(Doctors.results);
  if (action.type === ZipCodeActionKeys.ZIP_CODE_SEARCH) {
    return {
      state
    };
  } else {
    return { state }
  }
}

