import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const parameters = '?query=&similarity=1';
const url = `https://api.grepper.com/v1/answers/search${parameters}`;
const apiKey = process.env.GREPPER_TOKEN;

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${apiKey}:`).toString('base64')
    }
})
    .then(async response => {
        const {data} = await response.json();
        console.log(data.length);
    })
    .catch(error => console.error('Error:', error));