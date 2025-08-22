import express from 'express'
import cors from 'cors'

import movies_router from './routes/movies_router.js'
import reviews_router from './routes/reviews_router.js'
import users_router from "./routes/users_router.js";

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('<h1>Backend here!</h1>')
})

app.use('/movies', movies_router)
app.use('/reviews', reviews_router)
app.use('/users', users_router);

export default app