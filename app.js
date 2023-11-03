const express = require('express');
const axios = require('axios');
const app = express();

const apiKey = '5b5cacb447msh88e042c8be38b63p17a2cfjsn1bcd74e42c85';
const apiUrl = 'https://ott-details.p.rapidapi.com/advancedsearch';

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/ott-details', async (req, res) => {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            },
            params: {
                // Add any query parameters you need for the OTT API
                start_year: '2020',
                end_year: '2023',
                min_imdb: '6',
                max_imdb: '7.8',
                genre: 'action',
                language: 'tamil',
                type: 'movie',
                sort: 'latest',
                page: '1'
            },
        });

        const ottDetails = response.data;
        res.json(ottDetails);
    } catch (error) {
        console.error('Error fetching OTT data:', error);
        res.status(500).json({ error: 'Failed to fetch OTT data' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});