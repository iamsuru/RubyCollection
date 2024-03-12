const express = require('express')
const viewsRoute = require('./routes/ViewsRoute')
const apiRoute = require('./routes/APIRoute')
require('./public/db/config')
const app = express()


const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json()) //to accept json data
app.use(express.urlencoded({ extended: false }))

app.use('', viewsRoute)


app.use('/api/user', apiRoute)


app.listen(PORT, () => {
    console.log(`Server started at : http://localhost:${PORT}`);
})