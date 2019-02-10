import express from 'express';
import { Nuxt, Builder } from 'nuxt'
import helmet from 'helmet'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import api from './api'

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // security first
    app.use(helmet({
        dnsPrefetchControl: {
            allow: true
        }
    }))

    // Enabling CORS (before routes)
    app.use(cors())

    // enabling gzip before routes
    app.use(compression())

    app.set('port', port)

    // Import API Routes
    app.use('/api', api)

    // handle json responses
    app.use(json())
    // support encoded bodies
    app.use(urlencoded({
        extended: true
    }))

    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(process.env.NODE_ENV === 'production')

    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)

    console.log(`Server listening on ${host}:${port}. Compiling...`)
}

start()
