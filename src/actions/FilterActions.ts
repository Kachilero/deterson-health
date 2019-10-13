/**
 * Actions for filtering the list
 */
export enum FilterActionKeys {
  DISTANCE = 'DISTANCE',
  GENDER = 'GENDER'
}

interface IDistanceFilterAction {
  distance: number,
  type: FilterActionKeys.DISTANCE
}

interface IGenderFilterAction {
  gender: "Male" | "Female" | "default",
  results: any,
  type: FilterActionKeys.GENDER
}

export type FilterActionTypes = IDistanceFilterAction | IGenderFilterAction;

export function distanceFilter(distance: number = 0) {
  return {
    type: FilterActionKeys.DISTANCE,
    distance
  };
}

export function genderFilter(
  gender: "Male" | "Female" | "default" = "default",
  results: any = {}
  ) {
  return {
    type: FilterActionKeys.GENDER,
    results,
    gender
  }
}

export default { distanceFilter, genderFilter };
