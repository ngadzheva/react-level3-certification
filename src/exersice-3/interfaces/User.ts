interface LocationCoord {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: LocationCoord;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export default interface UserData {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
