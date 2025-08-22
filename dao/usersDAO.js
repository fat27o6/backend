let usersCollection

export default class UsersDAO {
    static async injectDB(conn) {
        if (usersCollection) return
        try {
            usersCollection = await conn.db(process.env.MOVIEREVIEWS_DB_NAME).collection("users")
        } catch (e) {
            console.error(`Unable to establish collection handles: ${e}`)
        }
    }

    static async createUser(userData) {
        try {
            const result = await usersCollection.insertOne(userData)
            
            return result
        } catch (e) {
            throw new Error("Error creating user: " + e)
        }
    }

    static async getUsers() {
        return await usersCollection.find({}).toArray()
    }
    static async getUserById(id) {
        return await usersCollection.findOne({
            _id: new (await import("mongodb")).ObjectId.createFromHexString(id)
        })
    }

    static async updateUser(id, updateData) {
        return await usersCollection.updateOne(
            { _id: new (await import("mongodb")).ObjectId.createFromHexString(id) },
            { $set: updateData }
        )
    }

    static async deleteUser(id) {
        return await usersCollection.deleteOne(
            { _id: new (await import("mongodb")).ObjectId.createFromHexString(id) }
        )
    }
}