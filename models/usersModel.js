export default class User {
    constructor({ name, email }) {
        this.name = name
        this.email = email
        this.createdAt = new Date()
    }
}