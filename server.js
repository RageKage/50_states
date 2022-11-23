let express = require('express');
let states_api = require('./routes/states')


let app = express();

app.use(express.json())

app.use('/api', states_api)


app.use((req, res, next) => {
    res.status(400).send('Not Found')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Server error: ' + err)
})

let server = app.listen(process.env.PORT || 3000, function () {
    console.log("server running on port " + server.address().port);
})