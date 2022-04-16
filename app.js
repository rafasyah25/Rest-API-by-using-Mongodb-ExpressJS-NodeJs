const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models/index.js');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the database!');
    }).catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    })


app.get('/', (req, res) => {
    res.json({
        massage: "Welcome to the API"
    })
})

require('./app/routes/post.routes.js')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost: ${PORT}`);
})