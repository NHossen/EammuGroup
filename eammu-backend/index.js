import express from 'express';
import https from 'https';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/search-flights', (req, res) => {
    const {
        origin,
        destination,
        departureDate,
        returnDate,
        adults = 1,
        children = 0,
        infantsOnLap = 0,
        infantsInSeat = 0,
        cabinClass = 1,
        sort = 1,
        stops = 0,
        currency = 'USD',
        locale = 'en-US',
        market = 'US',
        airlines,
        alliances,
        maxPrice
    } = req.query;

    if (!origin || !destination || !departureDate || !returnDate) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const params = new URLSearchParams({
        departureId: origin,
        arrivalId: destination,
        departureDate,
        arrivalDate: returnDate,
        adults,
        children,
        infantsOnLap,
        infantsInSeat,
        cabinClass,
        sort,
        stops,
        currency,
        locale,
        market
    });

    if (airlines) params.append('airlines', airlines);
    if (alliances) params.append('alliances', alliances);
    if (maxPrice) params.append('maxPrice', maxPrice);

    const options = {
        method: 'GET',
        hostname: process.env.RAPIDAPI_HOST,
        path: `/flights/search-roundtrip?${params.toString()}`,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST
        }
    };

    const apiReq = https.request(options, apiRes => {
        let data = [];
        apiRes.on('data', chunk => data.push(chunk));
        apiRes.on('end', () => {
            try {
                const json = JSON.parse(Buffer.concat(data).toString());
                res.json(json);
            } catch (err) {
                res.status(500).json({ error: 'Invalid API response' });
            }
        });
    });

    apiReq.on('error', err => res.status(500).json({ error: err.message }));
    apiReq.end();
});

app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
