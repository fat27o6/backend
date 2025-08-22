import express from "express"

import UsersController from "../controllers/usersController.js"

const users_router = express.Router()

users_router.route('/')
    .get(UsersController.apiGetUsers)
    .post(UsersController.apiCreateUser)

users_router.route("/:id")
    .get(UsersController.apiGetUserById)
    .put(UsersController.apiUpdateUser)
    .delete(UsersController.apiDeleteUser)

export default users_router