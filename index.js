const express = require('express')
const cors = require('cors')

const app = express()

var PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', async(req,res) => {
    res.send('hello')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  });
  