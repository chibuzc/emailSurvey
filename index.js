const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json({test : "okay"})
})

const PORT = process.env.PORT
app.listen(PORT || 5000)