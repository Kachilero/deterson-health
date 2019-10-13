/**
 * Actions for the Zip Code search
 */
export enum ZipCodeActionKeys {
  ZIP_CODE_SEARCH = 'ZIP_CODE_SEARCH'
}

interface IZipCodeSearch {
  distance: number;
  type: ZipCodeActionKeys.ZIP_CODE_SEARCH
}

export type ZipCodeActionTypes = IZipCodeSearch;

export function zipCodeSearch(distance: number | null = null) {
  return {
    type: ZipCodeActionKeys.ZIP_CODE_SEARCH,
    distance
  };
}

export default { zipCodeSearch };
