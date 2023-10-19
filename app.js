const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const config = require('./config/config')

const app = express();

mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected to database")).catch((error) => console.error(error));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome")
}
)

app.use('/api', apiRoutes);

const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})




