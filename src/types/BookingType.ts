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
