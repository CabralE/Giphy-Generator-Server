require("dotenv").config();
const axios = require('axios').default
const { PORT = 3000, API_KEY } = process.env;
const express = require("express");
const app = express();
const BASE_URL = "http://api.giphy.com/v1/gifs/search" 

app.get("/", (req, res) => {
    const options = {
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=25&q=snow`,
        data: {
            giphy: req.body
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
});

app.post('/', async (req, res) => {
    const options = {
        method: 'POST',
        url: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=25&q=snow`,
        headers: {
            'content-type': 'application/json',
        },
        data: {
            giphy: req.body
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));