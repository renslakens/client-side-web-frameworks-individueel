export class RegisterModel {
    username = '';
    emailAddress = '';
    password = '';
    rating = 0;
    birthday = Date.now;
    city = '';
    street = '';
    house_number = '';
    postal_code = '';
    country = '';

    constructor(username = '', emailAddress = '', password = '', rating = 0, birthday = Date.now, city = '', street = '', house_number = '', postal_code = '', country = '') {
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
        this.rating = rating;
        this.birthday = birthday;
        this.city = city;
        this.street = street;
        this.house_number = house_number;
        this.postal_code = postal_code;
        this.country = country;
    }
}