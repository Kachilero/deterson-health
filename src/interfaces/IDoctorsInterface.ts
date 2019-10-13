/**
 * We'll define the doctor object here to easily import it into anywhere
 * we need it.
 */
export interface IDoctorsInterface {
  fullName: string
  lastName: string
  specialties: string[]
  languages?: string[] | undefined
  url: string
  image: string
  gender: "Male" | "Female"
  bio?: string
  locations: {
    name: string
    url: string
    streetAddress: string | null
    cityStateZip: string | null
    lat: number
    lng: number
    distance: number | null
    phone: number | null
    image: string | null
    availability: string | null
  }[]
}

export interface IDoctorsResults {
  results: IDoctorsInterface[]
}
