


/*
{
    "id": 2,
    "userId": 5,
    "user": {
    "id": 5,
        "username": "WasabiWizard",
        "email": "spicywizard@mail.com",
        "password": "magicwasabi"
},
    "bookId": 6,
    "book": {
    "id": 6,
        "title": "Kaze and Kimono: Embracing Autism in Modern Japan",
        "author": "Kenji Yamamoto",
        "year": 2013
},
    "bookingDate": "2024-04-23T12:45:46.475",
    "returnDate": "2024-04-23T12:45:46.475"
}
make type for this */

export interface BookingType {
    id: number;
    userId: number;
    user: {
        id: number;
        username: string;
        email: string;
        password: string;
    };
    bookId: number;
    book: {
        id: number;
        title: string;
        author: string;
        year: number;
    }
    bookingDate: string;
    returnDate: string;
}
