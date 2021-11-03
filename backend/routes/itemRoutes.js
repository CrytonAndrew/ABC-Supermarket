import express from 'express'
const router = express.Router()

import {
    getItems,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct
} from "../controllers/itemController.js"

import {protect, admin} from "../middleware/authMiddlware.js"

router.route("/").get(getItems)
router.route("/create").post(protect, admin, createProduct)
router.route("/:id").put(protect, admin, updateProduct).get(getProduct)
router.route("/:id/delete").delete(protect, admin, deleteProduct)

export default router