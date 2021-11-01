import express from 'express'
const router = express.Router()

import {
    authUser,
    registerUser,
    getProfile
} from '../controllers/userController.js'

import {
    protect,
    admin,
} from "../middleware/authMiddlware.js"

router.route("/").post(registerUser)
router.route("/login").post(authUser)
router.route("/profile").get(protect, getProfile)

export default router