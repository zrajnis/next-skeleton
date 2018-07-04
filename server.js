const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => handle(req, res))

    server.listen(3000, e => {
      if (e) throw e

      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(e => {
    console.error(e.stack)
    process.exit(1)
  })
