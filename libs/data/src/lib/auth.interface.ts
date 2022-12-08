export interface UserCredentials {
    username: string;
    password: string;
}

export interface UserRegistration extends UserCredentials {
    emailAddress: string
    birthday: Date
    rating: number
    city: string
    street: string
    house_number: string
    postal_code: string
    country: string
}

export interface Token {
    token: string
}