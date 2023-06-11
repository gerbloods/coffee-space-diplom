
export default class UserStore {
	constructor() {
		this._isAuth = false

	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	get Auth() {
		return this._isAuth
	}
}