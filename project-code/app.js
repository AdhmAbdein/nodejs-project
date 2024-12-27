const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello I am Adham and this is nodejs website');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

module.exports = app;

