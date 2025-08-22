import mongodb from "mongodb"
import dotenv from "dotenv"

import app from './server.js'

import MoviesDAO from './dao/moviesDAO.js'
import ReviewsDAO from './dao/reviewsDAO.js'
import UsersDAO from "./dao/usersDAO.js"

async function main(){
    dotenv.config()
    const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)
    const port = process.env.PORT || 8000

    try {
        await client.connect()
        await MoviesDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        await UsersDAO.injectDB(client)

        app.listen(port, '0.0.0.0', ()=>{
            console.log(`Server is running on port ${port}`)
        })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

main().catch(console.error)