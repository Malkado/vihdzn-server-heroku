const express = require('express');
const app = express();
const cors = require('cors');


const PORT = process.env.PORT || 8080;
app.use(cors());
const projectName = 'vihdzn-frontend';
app.use(express.static(__dirname + `/dist/${projectName}`));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + `/dist/${projectName}/index.html`);
});


app.listen(PORT, () => {
    console.log('listening on port:', PORT);
});