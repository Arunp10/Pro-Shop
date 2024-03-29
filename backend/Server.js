import express from 'express'
import dotenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()
 
app.get('/', (req, res) => {
    res.send('API is running.....')
})

app.use('/api/products',productRoutes)
// error not in api route
app.use(notFound)
// error not in product
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running is ${process.env.NODE_ENV} on port ${PORT}`))
 