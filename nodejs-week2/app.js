import express from 'express';
import documents from './documents.json' with { type: 'json' }
// import documents from './documents.json' assert { type: 'json' }; alternative to import from .json file


const app = express();
const port = process.env.PORT || 3000;

app.get('/search', (req, res) => {
    const query = req.query.q;
    if (!query) {
    res.send(documents);
    }

const lowerCaseQuery = query.toLowerCase(); 
const results = documents.filter(doc => {
    return Object.values(doc).some(value => {
        if (typeof value === 'string') {
        return value.toLowerCase().includes(lowerCaseQuery);
    }
        return false;
    });
});

    res.send(results);
});


app.get('/documents/:id', (req, res) => {
const id = parseInt(req.params.id);

const document = documents.find(document => document.id === id);

    if (document) {
    res.json(document);
    } else {
    res.status(404).json({ error: 'Document not found' });
    }
});

app.post 
('/search', (req, res) =>{
    const query = req.query.q?.toLowerCase();

    if (query) {
    results = results.filter(doc => {
    return Object.values(doc).some(value =>
    typeof value === 'string' && value.toLowerCase().includes(query));
    });
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});