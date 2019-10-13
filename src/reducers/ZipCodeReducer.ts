/**
 * Reducer for the Zip Code search
 */
import {ZipCodeActionKeys, ZipCodeActionTypes} from "../actions/ZipCodeAction";
import { IDoctorsResults } from '../interfaces/IDoctorsInterface'
import Doctors from '../api/doctors.json'

const ZipCodeSearchInitState: IDoctorsResults = {
  results: null
};

export default function (
  // state: any,
  state = ZipCodeSearchInitState,
  action: ZipCodeActionTypes)
{
  console.log('Zip Reducer');
  console.log(typeof Doctors);
  console.log(Doctors.results);
  if (action.type === ZipCodeActionKeys.ZIP_CODE_SEARCH) {
    console.log('ZIP_CODE_SEARCH');
    return {
      results: Doctors.results,
        ...state
    };
  } else {
    console.log('DEFAULT');
    return { ...state }
  }
}

