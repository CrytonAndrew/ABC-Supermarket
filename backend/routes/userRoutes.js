import express from 'express'
const router = express.Router()

import {
    authUser,
    registerUser,
    getProfile,
    getUsers
} from '../controllers/userController.js'

import {
    protect,
    admin,
} from "../middleware/authMiddlware.js"

router.route("/").post(registerUser).get(protect, admin, getUsers)
router.route("/login").post(authUser)
router.route("/profile").get(protect, getProfile)

export default router