
export default class PostStore {
	constructor() {
		this._post = []

	}

	setPost(post) {
		this._post = post
	}

	get Post() {
		return this._post
	}
}