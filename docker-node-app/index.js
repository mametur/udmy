const express = require ('express');

const app = express();

app.get('/', (req, res)=>{res.send('Bye Mame ...!!!')});

app.listen(8050, ()=> console.log('Listening on port  8080'));