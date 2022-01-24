export type Residence = {
    country: string;
    city: string;
}
export type LocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

export type User = {
    id: number;
    name: string;
    residence: Residence;
    locationData: LocationData;
}