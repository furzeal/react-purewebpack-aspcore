import Renderer from './renderer'

const express = require('express')

const app = express()
const port = 3040

app.use(express.static('public', {
  index: false,
}))

app.get('*', (req, res) => {
  const rendererInstance = Renderer(req)

  if (rendererInstance.routestatus === 404) {
    res.status(404).end('Not found, 404 status returned')
  } else {
    res.send(Renderer(req).htmlcode)
  }
})

// app.listen(port, () => console.log(`Listening on port ${port}!`))

app.listen(3040, () => {
  console.log('Listening on port 3040!');
});
