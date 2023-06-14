export default class BookingStore {
	constructor() {
		this._booking = []

	}

	setBooking(booking) {
		this._booking = booking
	}

	get Booking() {
		return this._booking
	}
}