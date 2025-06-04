import express from 'express';
import documents from './documents.json' with { type: 'json' }
// import documents from './documents.json' assert { type: 'json' }; alternative to import from .json file


const app = express();
const port = process.env.PORT || 3000;

app.get('/search', (req, res) => {
    const query = req.query.q;
    if (!query) {
    res.send(documents);
    return;
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});