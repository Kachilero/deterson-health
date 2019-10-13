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
    if ( state.results === null ) { state.results = [] }
    for (let i = 0; i < Doctors.results.length; i++) {
      // @ts-ignore
      state.results[i] = Doctors.results[i]
    }
    state.results.sort((a,b) => {
      // We're going to ignore TS here because it's keeps warning
      // that the Object could be null, but it actually can't
      //@ts-ignore
      return a.locations[0].distance > b.locations[0].distance ? 1 : -1;
    });
    return {
      ...state
    };
  } else {
    return { ...state }
  }
}

