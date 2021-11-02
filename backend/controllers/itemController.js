import asyncHandler from "express-async-handler"
import Item from "../models/ItemModel.js"

// @desc    Get all items 
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({})
    res.json(items)
})

// @desc    Create item
// @route   POST /api/items/create
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const item = new Item({
        name: 'Sample Item', 
        description: 'Sample description',
        price: 0, 
        image: '/img/item.jpeg',
        user: req.user._id
    })

    const newItem = await item.save()

    if (newItem) {
        res.status(201).json(newItem)
    } else {
        res.status(401)
        throw new Error('New item failed to be created')
    }
})

// @desc    Update item information 
// @route   POST /api/items/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {name, description, price, image } = req.body
    
    const product = await Item.findById(req.params.id)

    if (product) {
        product.name = name
        product.description = description
        product.price = price
        product.image = image

        const updatedItem = await product.save()
        res.json(updatedItem)
    } else {
        res.status(404)
        throw new Error ('The item was not found')
    }
})

// @desc    Update item information 
// @route   Delete /api/items/:id/delete
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => { 
    const product = await Item.findById(req.params.id)

    if(product){ 
        await product.remove()
        res.json({ message: "Item successfully removed"})
    } else {
        res.status(404)
        throw new Error('Item could not be removed')
    }
})

export {
    getItems,
    createProduct,
    updateProduct,
    deleteProduct
}