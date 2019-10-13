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
  if (action.type === ZipCodeActionKeys.ZIP_CODE_SEARCH) {
    console.log('ZIP_CODE_SEARCH');
    if ( state.results === null ) { state.results = [] }
    for (let i = 0; i < Doctors.results.length; i++) {
      // @ts-ignore
      state.results[i] = Doctors.results[i]
    }
    return {
      ...state
    };
  } else {
    return { ...state }
  }
}

