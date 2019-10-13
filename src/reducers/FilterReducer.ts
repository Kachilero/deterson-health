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
      action.results = action.results.filter((results: any) => {
        if (action.distance === 30) { return action.results }
        const resultDistance = Math.ceil(results.locations[0].distance);
        return (resultDistance < action.distance) ? results : '';
      });
      state.results = action.results;
      return {
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
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
