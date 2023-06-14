
export default class OrderStore {
	constructor() {
		this._order = []

	}

	setOrder(order) {
		this._order = order
	}

	get Order() {
		return this._order
	}
}