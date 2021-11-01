import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import items from './data/items.js'
import User from './models/userModel.js'
import Item from './models/ItemModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Item.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = items.map((item) => {
            return { ...item, user: adminUser}
        })

        await Item.insertMany(sampleProducts)

        console.log('Data imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Item.deleteMany()

        console.log('Data destroyed successfully'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}