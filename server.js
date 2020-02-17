const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/js/app.js')));


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
	res.send()
})



app.listen(PORT, () => console.log(`Server started on on port ${PORT}`));