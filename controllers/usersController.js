import UsersDAO from "../dao/usersDAO.js"
import User from "../models/usersModel.js"

export default class UserController {
    static async apiCreateUser(req, res) {
        try {
            const user = new User(req.body)
            const result = await UsersDAO.createUser(user)

            res.json({ success: true, insertedId: result.insertedId })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiGetUsers(req, res) {
        const users = await UsersDAO.getUsers()

        res.json(users)
    }
    static async apiGetUserById(req, res) {
        try {
            const user = await UsersDAO.getUserById(req.params.id)
            if (!user) return res.status(404).json({ error: "User not found" })

            res.json(user)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateUser(req, res) {
        try {
            const result = await UsersDAO.updateUser(req.params.id, req.body)

            res.json({ success: result.modifiedCount > 0 })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteUser(req, res) {
        try {
            const result = await UsersDAO.deleteUser(req.params.id)
            
            res.json({ success: result.deletedCount > 0 })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}