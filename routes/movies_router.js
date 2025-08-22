import express from 'express'

import MoviesController from '../controllers/moviesController.js'

const movies_router = express.Router()

movies_router.route('/')
    .get(MoviesController.apiGetMovies)

movies_router.route('/ratings')
    .get(MoviesController.apiGetRatings)

movies_router.route('/:movie_id')
    .get(MoviesController.apiGetMovieById)

export default movies_router