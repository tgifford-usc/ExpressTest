import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("DES222");
})

// Vercel wraps the exported app in its own handler; only listen when run directly.
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

export default app
