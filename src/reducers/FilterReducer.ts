/**
 * Reducers for the gender and distance filters
 */
import {FilterActionKeys, FilterActionTypes} from "../actions/FilterActions";

const FilterReducerDefaultState = {
  distance: 30,
  gender: 'default',
  results: []
};
export default function (
  state: any = FilterReducerDefaultState,
  action: FilterActionTypes
) {
  switch (action.type) {
    case FilterActionKeys.DISTANCE:
      console.log('FILTER DISTANCE');
      action.results = action.results.filter((results: any) => {
        if (action.distance === 30) { return action.results }
        const resultDistance = Math.ceil(results.locations[0].distance);
        // console.log(`Result : ${resultDistance}`);
        // console.log(`Action : ${action.distance}`);
        // console.log(resultDistance < action.distance);
        return (resultDistance < action.distance) ? results : '';
      });
      // console.log(`Action Results Length: ${action.results.length}`);
      state.results = action.results;
      return {
        // distance: action.distance,
        ...state
      };
    case FilterActionKeys.GENDER:
      action.results = action.results.filter((results: any) => {
        if (action.gender === "default") {
          return action.results
        }
        return results.gender === action.gender;
      });
      state.results = action.results;
      return {
        // gender: action.gender,
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
